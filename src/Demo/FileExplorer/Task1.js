import React, { createContext, useContext, useState } from 'react';
import '../../App.css'; // Ensure you have this file for styles

// Context for managing folder expansion state
const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [expandedFolders, setExpandedFolders] = useState({});

    const toggleFolder = (id) => {
        setExpandedFolders(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <NavContext.Provider value={{ expandedFolders, toggleFolder }}>
            {children}
        </NavContext.Provider>
    );
};

const useNav = () => useContext(NavContext);

// Folder Component
const Folder = ({ id, name, children }) => {
    const { expandedFolders, toggleFolder } = useNav();
    const isExpanded = expandedFolders[id];

    return (
        <li className="folder">
            <span
                className={`icon ${isExpanded ? 'chevron-down' : 'chevron-right'}`}
                onClick={() => toggleFolder(id)}
            >
                {isExpanded ? '▼' : '▶'}
            </span>
            <span className="folder-name">{name}</span>
            {isExpanded && <ul className="subfolder-list">{children}</ul>}
        </li>
    );
};

// Database Component
const Database = ({ name, children }) => {
    return (
        <li className="database">
            <span className="db-name">{name}</span>
            <ul className="table-list">
                {children}
            </ul>
        </li>
    );
};

// Table Component
const Table = ({ name }) => {
    return (
        <li className="table">
            {name}
        </li>
    );
};

// Main Navigation Component
const Navigation = () => {
    return (
        <ul className="folder-list">
            <Folder id="folder1" name="Folder 1">
                <Folder id="subfolder1" name="Subfolder 1.1">
                    <Database name="Database 1.1.1">
                        <Table name="Table 1.1.1.1" />
                        <Table name="Table 1.1.1.2" />
                    </Database>
                </Folder>
                <Database name="Database 1.2">
                    <Table name="Table 1.2.1" />
                </Database>
            </Folder>
        </ul>
    );
};

// App Component
const Task1 = () => {
    return (
        <NavProvider>
            <div className="App">
                <Navigation />
            </div>
        </NavProvider>
    );
};

export default Task1;
