import React from "react";

const SideBar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button>Add</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Not preview</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
