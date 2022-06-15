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
    };
    setNotes([...notes, newNote]);
    setActiveNote(newNote.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, title, body) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, title, body } : note))
    );
  };

  const setActiveNoteId = (id) => {
    setActiveNote(id);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
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
      <Main />
    </div>
  );
}

export default App;
