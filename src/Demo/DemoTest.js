import '../App.css';
import * as React from 'react';
import { useState } from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DemoTest() {
  const [draggedNode, setDraggedNode] = useState(null);

  const handleDragStart = (event, nodeId) => {
    setDraggedNode(nodeId);
  };

  const handleDragOver = (event, nodeId) => {
    event.preventDefault();
  };

  const handleDrop = (event, parentId) => {
    event.preventDefault();
    if (parentId === draggedNode) return; // Prevent dropping on the same node

    // Your logic to handle dropping the dragged node to the new parent
    console.log('Dropped node', draggedNode, 'to parent', parentId);

    // Reset draggedNode state after dropping
    setDraggedNode(null);
  };

  return (
    <div className="App">
      <div className="head" style={{ width: 'fit-content', margin: 'auto' }}>
        <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
        <strong>React MUI TreeView API</strong>
      </div>

      <TreeView
        aria-label="Tutorials navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ margin: 'auto', flexGrow: 1, width: 'fit-content' }}
      >
        <TreeItem nodeId="1" label="Data Structures">
          <TreeItem
            nodeId="2"
            label="Array"
            draggable
            onDragStart={(event) => handleDragStart(event, '2')}
            onDragOver={(event) => handleDragOver(event, '2')}
            onDrop={(event) => handleDrop(event, '1')}
          />
          <TreeItem
            nodeId="3"
            label="Max Heap"
            draggable
            onDragStart={(event) => handleDragStart(event, '3')}
            onDragOver={(event) => handleDragOver(event, '3')}
            onDrop={(event) => handleDrop(event, '1')}
          />
          <TreeItem
            nodeId="4"
            label="Stack"
            draggable
            onDragStart={(event) => handleDragStart(event, '4')}
            onDragOver={(event) => handleDragOver(event, '4')}
            onDrop={(event) => handleDrop(event, '1')}
          />
        </TreeItem>
        <TreeItem nodeId="5" label="Algorithms">
          <TreeItem
            nodeId="10"
            label="Greedy"
            draggable
            onDragStart={(event) => handleDragStart(event, '10')}
            onDragOver={(event) => handleDragOver(event, '10')}
            onDrop={(event) => handleDrop(event, '5')}
          />
          <TreeItem nodeId="6" label="Graph">
            <TreeItem
              nodeId="8"
              label="DFS"
              draggable
              onDragStart={(event) => handleDragStart(event, '8')}
              onDragOver={(event) => handleDragOver(event, '8')}
              onDrop={(event) => handleDrop(event, '6')}
            />
            <TreeItem
              nodeId="9"
              label="BFS"
              draggable
              onDragStart={(event) => handleDragStart(event, '9')}
              onDragOver={(event) => handleDragOver(event, '9')}
              onDrop={(event) => handleDrop(event, '6')}
            />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
}

export default DemoTest;
