import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Note.css";

function Note({ day, setShowDay }) {
  const [note, setNote] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const existingNote = notes.filter(
      (n) => new Date(n.date).toDateString() === new Date(day).toDateString()
    )[0];

    if (existingNote) {
      setNote(existingNote.note);
    }
  }, [day, notes]);

  const handleOnChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    if (note === "") return;
    const updatedNote = notes.filter(
      (n) => new Date(n.date).toDateString() === new Date(day).toDateString()
    );

    if (updatedNote.length !== 0) {
      setNotes(
        notes?.map((n) =>
          new Date(n.date).toDateString() === new Date(day).toDateString()
            ? { ...n, note: note }
            : n
        )
      );
    } else {
      let newNote = {
        id: uuidv4(),
        date: day,
        note,
      };
      setNotes([...notes, newNote]);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    setReadOnly(true);
  };

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter(
      (n) => new Date(n.date).toDateString() !== new Date(day).toDateString()
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setShowDay(false);
  };

  return (
    <form className="day-note" onSubmit={handleSaveNote}>
      <textarea
        onClick={() => setReadOnly(false)}
        name="note"
        id="note"
        value={note}
        onChange={(e) => handleOnChange(e)}
        readOnly={readOnly}
      ></textarea>
      <div className="button-section">
        {note.length > 0 && (
          <button className="delete" onClick={handleDeleteNote}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        )}
        {!readOnly && <button>Save</button>}{" "}
      </div>
    </form>
  );
}

export default Note;
