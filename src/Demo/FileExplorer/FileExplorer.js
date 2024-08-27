import { createContext, useContext, useState } from "react";

const items = [
  { type: 'file', itemName: 'file1.txt', owner: 'FileUser1', lastUpdated: '2024-07-01' },
  {
    type: 'folder', itemName: 'folder1', owner: 'User2', lastUpdated: '2024-07-02', contents: [
      { type: 'file', itemName: 'file2.txt', owner: 'FileUser2', lastUpdated: '2024-07-01' },
      { type: 'file', itemName: 'file3.txt', owner: 'FileUser3', lastUpdated: '2024-07-03' }
    ]
  },
  { type: 'file', itemName: 'file4.txt', owner: 'FileUser4', lastUpdated: '2024-07-01' },
  {
    type: 'folder', itemName: 'folder2', owner: 'User4', lastUpdated: '2024-07-04', contents: [
      { type: 'file', itemName: 'file5.txt', owner: 'FileUser5', lastUpdated: '2024-07-01' },
      {
        type: 'folder', itemName: 'folder3', owner: 'User3', lastUpdated: '2024-07-01', contents: [
          { type: 'file', itemName: 'file6.txt', owner: 'FileUser6', lastUpdated: '2024-07-01' },
          { type: 'file', itemName: 'file7.txt', owner: 'FileUser7', lastUpdated: '2024-07-03' }
        ]
      },
    ]
  }
];

const FileStructure = () => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item.type === 'file' && <div>{item.itemName}</div>}
          {item.type === 'folder' && <Folder items={item} />}
        </div>
      ))}
    </div>
  )
}

const Folder = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const {setSelectedFolder} = useContext(FolderContext)
  const toggleFolder = () => {
    setIsOpen(!isOpen)
    setSelectedFolder(items)
  }
  return (
    <div>
      <div onClick={toggleFolder}>{isOpen ? '^' : '>'}{items.itemName}</div>
      <div style={{ paddingLeft: '20px' }}>
        {isOpen && items.contents.map((citem, index) => (
          <div key={index}>
            {citem.type === 'file' && <div>{citem.itemName}</div>}
            {citem.type === 'folder' && <Folder items={citem} />}
          </div>
        ))}
      </div>
    </div>
  )
}

const FolderDetailView = () => {
  const { selectedFolder } = useContext(FolderContext)
  if (!selectedFolder) return <div></div>
  return (
    <div style={{margin: '50px'}}>
      <h2>Owner</h2>
      {selectedFolder.contents.map((item, index) =>
        <div key={index}>
          {item.owner}
        </div>
      )}
    </div>
  )
}

const FolderContext = createContext()
function FileExplorer() {
  const [selectedFolder, setSelectedFolder] = useState(null)

  return (
    <FolderContext.Provider value={{ selectedFolder, setSelectedFolder }}>
      <div>
        <FileStructure />
        <FolderDetailView />
      </div>
    </FolderContext.Provider>
  );
}

export default FileExplorer;