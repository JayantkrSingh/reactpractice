Task 1
    - Create a basic navigational component that will allow a user to explore a categorized system of databases and tables:  
    - Folders can contain 0+ other folders, or 0+ databases.
    - Databases can contain 0+ tables
    - Tables will have 0+ columns, but these should NOT be displayed in the navigation component.
    - The specifications for the component are:
    - Folders should show a chevron-right icon when not expanded, and chevron-down icon when expanded, to make it easier for the user to explore the directory.
    - As the nesting gets deeper, a user should see appropriate indentation
    - When hovering over a file, the user should see appropriate styles to indicate it is clickable.
    - Default background color of each navigation item should be white (#FFFFFF ). When selected, it should be #E0EDFF


Task 2
    - We will now create a main content area so we can display information about the contents of a folder, database and table
    - Both views will consist of a header, which contains the same icon from the file explorer, with the name, path and description
    - A folder / DB detail should additionally display a table with its DIRECT children.
    - No nesting is required, but selecting one of the rows that contain children should update the selected item in the navigation to be the selected row.
    - Each row should have type + name + description + size (filesize and # children for DB / table)
    - A table detail should additionally display a table with columns.
    - Each row should have column type + name + description
    - The specifications for the component are: The content area takes up most of the screen, but the navigational items should still be readable up to three levels.
    - If there are more, horizontal scrolling should be put into place.
    - There should be a dividing line between navigation and content, with color #D4D7DC.
    - The appropriate view shows for selected type The currently selected file / folder that is displayed in the main content area should be highlighted in the navigational menu.

