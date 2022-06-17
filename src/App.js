import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { useEffect, useState } from "react";

// create slmple note app
function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      title: "",
      body: "",
      id: Date.now(),
      lastModified: Date.now(),
    };
    setNotes([...notes, newNote]);
    setActiveNote(newNote.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const setActiveNoteId = (id) => {
    setActiveNote(id);
  };

  return (
    <div className="App">
      <SideBar
        notes={notes}
        addNote={addNote}
        activeNote={activeNote}
        deleteNote={deleteNote}
        getActiveNote={getActiveNote}
        setActiveNoteId={setActiveNoteId}
        editNote={editNote}
      />
      <Main activeNote={getActiveNote()} editNote={editNote} />
    </div>
  );
}

export default App;
