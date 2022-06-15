import React from "react";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" placeholder="Note Title" autoFocus />
        <textarea id="body" placeholder="Write your note here..." />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title"></h1>
      </div>
    </div>
  );
};

export default Main;
