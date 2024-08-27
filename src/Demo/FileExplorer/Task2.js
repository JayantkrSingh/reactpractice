import React, { useState, useContext, createContext } from 'react';
import '../../App.css';

const items = [
  {
    id: 1,
    type: 'folder',
    name: 'Folder 1',
    children: [
      { id: 4, type: 'file', name: 'File 1', size: '1.2MB' },
      { id: 5, type: 'file', name: 'File 2', size: '3.4MB' },
    ],
  },
  {
    id: 2,
    type: 'folder',
    name: 'Folder 2',
    children: [
      { id: 6, type: 'file', name: 'File 3', size: '2.1MB' },
    ],
  },
  {
    id: 3,
    type: 'table',
    name: 'Table 1',
    children: [
      { id: 7, type: 'column', name: 'Column 1', description: 'Int' },
      { id: 8, type: 'column', name: 'Column 2', description: 'Varchar' },
    ],
  },
];

const Navigation = () => {
  const { selectedItem, setSelectedItem } = useContext(SelectionContext);
  return (
    <div className="navigation">
      {items.map(item => (
        <div
          key={item.id}
          className={`item ${selectedItem?.id === item.id ? 'selected' : ''}`}
          onClick={() => setSelectedItem(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

const ContentArea = () => {
  const { selectedItem } = useContext(SelectionContext);
  if (!selectedItem) return <div className="content">Select an item to view details.</div>;

  return (
    <div className="content">
      <h2>{selectedItem.name}</h2>
      <table>
        <thead>
          <tr><th>Type</th><th>Name</th>{selectedItem.type === 'folder' ? <th>Size</th> : <th>Description</th>}</tr>
        </thead>
        <tbody>
          {selectedItem.children.map(child => (
            <tr key={child.id}>
              <td>{child.type}</td>
              <td>{child.name}</td>
              {selectedItem.type === 'folder' ? <td>{child.size}</td> : <td>{child.description}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SelectionContext = createContext();
const Task2 = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <SelectionContext.Provider value={{ selectedItem, setSelectedItem }}>
      <div className="app">
        <Navigation />
        <ContentArea />
      </div>
    </SelectionContext.Provider>
  )
};

export default Task2;
