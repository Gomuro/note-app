import React from "react";

const SideBar = ({
  notes,
  addNote,
  activeNote,
  deleteNote,
  getActiveNote,
  setActiveNoteId,
  editNote,
}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map(({ title, body, id }) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNoteId(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={() => deleteNote(id)}>Delete</button>
            </div>
            <p>{body.length > 50 ? `${body.substring(0, 50)}...` : body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
