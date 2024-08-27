import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { Typography } from '@mui/material';

const initialData = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: 'child1',
      name: 'Child 1',
      children: [
        {
          id: 'grandchild1',
          name: 'Grandchild 1',
          children: [
            {
              id: 'leaf1',
              name: 'Leaf 1',
            },
            {
              id: 'leaf2',
              name: 'Leaf 2',
            },
          ],
        },
        {
          id: 'grandchild2',
          name: 'Grandchild 2',
          children: [
            {
              id: 'leaf3',
              name: 'Leaf 3',
            },
          ],
        },
      ],
    },
    {
      id: 'child2',
      name: 'Child 2',
      children: [
        {
          id: 'grandchild3',
          name: 'Grandchild 3',
          children: [
            {
              id: 'leaf4',
              name: 'Leaf 4',
            },
          ],
        },
      ],
    },
  ],
};

const DndTreeView = () => {
  const [treeData, setTreeData] = useState(initialData);

  const handleDragStart = (event, nodeId) => {
    event.dataTransfer.setData('text/plain', nodeId);
  };

  const handleDrop = (event, parentId) => {
    event.preventDefault();
    const draggedNodeId = event.dataTransfer.getData('text/plain');
    moveNode(draggedNodeId, parentId);
  };

  const moveNode = (nodeId, newParentId) => {
    setTreeData(prevTreeData => {
      const updatedTreeData = { ...prevTreeData };
      const nodeToMove = findNode(updatedTreeData, nodeId);
      const oldParent = findParent(updatedTreeData, nodeId);

      if (oldParent && oldParent.children) {
        oldParent.children = oldParent.children.filter(child => child.id !== nodeId);
      }

      const newParent = findNode(updatedTreeData, newParentId);
      if (newParent && newParent.children) {
        newParent.children.push(nodeToMove);
      }

      return updatedTreeData;
    });
  };

  const findNode = (node, nodeId) => {
    if (node.id === nodeId) {
      return node;
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const foundNode = findNode(node.children[i], nodeId);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  };

  const findParent = (node, nodeId) => {
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].id === nodeId) {
          return node;
        }
        const foundParent = findParent(node.children[i], nodeId);
        if (foundParent) {
          return foundParent;
        }
      }
    }
    return null;
  };

  const renderTree = (nodes) => {
    if (!nodes) return null;
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={<Typography>{nodes.name}</Typography>}
        draggable={nodes.children ? false : true}
        onDragStart={(event) => handleDragStart(event, nodes.id)}
        onDrop={(event) => handleDrop(event, nodes.id)}
        onDragOver={(event) => event.preventDefault()}
      >
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  return (
    <TreeView defaultCollapseIcon={<></>} defaultExpandIcon={<></>} multiSelect>
      {renderTree(treeData)}
    </TreeView>
  );
};

export default DndTreeView;
