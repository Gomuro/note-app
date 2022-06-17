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
  const sortedNotes = notes.sort((a, b) => {
    return a.lastModified - b.lastModified;
  });
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map(({ title, body, id, lastModified }) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNoteId(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={() => deleteNote(id)}>Delete</button>
            </div>
            <p>{body.length > 50 ? `${body.substring(0, 50)}...` : body}</p>
            <small className="note-meta">
              {new Date(lastModified).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
