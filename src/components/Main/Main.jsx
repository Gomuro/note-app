import React from "react";

const Main = ({ activeNote, editNote }) => {
  const onEditField = (field, value) => {
    editNote({ ...activeNote, [field]: value });
  };

  if (!activeNote) {
    return <h1 className="alert">No note selected</h1>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
      </div>
    </div>
  );
};

export default Main;
