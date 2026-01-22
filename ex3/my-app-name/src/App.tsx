import Welcome from "./components/Welcome";
import { useState, useEffect } from "react";
import { Note } from "./types";
import { getAllNotes, createNote } from "./noteService";

// interface Note {
//   id: string;
//   content: string;
// }
const App = () => {
  //TS значит newNote: string  and setNewNote принимает строку
  // useState<string>(initialState: string | (() => string)):
  // [string, React.Dispatch<React.SetStateAction<string>>]
  const [newNote, setNewNote] = useState("");

  //TS значит notes это массив объектов Note
  // useState<Note[]>(initialState: Note[] | (() => Note[])):
  // [Note[], React.Dispatch<React.SetStateAction<Note[]>>]
  //before interface Note :
  //useState<never[]>(initialState: never[] | (() => never[])):
  //[never[], React.Dispatch<React.SetStateAction<never[]>>]
  const [notes, setNotes] = useState<Note[]>([{ id: "1", content: "testing" }]);
  const name = "Sarah";
  // 'event'  has an 'any' type
  // React.SyntheticEvent The base event for all above events

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createNote({ content: newNote }).then((data) => {
      setNotes(notes.concat(data));
    });

    setNewNote("");
    // };
    //     const noteToAdd = {
    //       content: newNote,
    //       id: String(notes.length + 1),
    //     };
    //     setNotes(notes.concat(noteToAdd));
    //     setNewNote("");
  };

  useEffect(() => {
    getAllNotes().then((data) => {
      setNotes(data);
    });
  }, []);
  return (
    <div>
      <Welcome name={name} />
      <form onSubmit={noteCreation}>
        <input
          value={newNote}
          // React does event.target.value  string and  setNewNote ждёт string
          onChange={(event) => setNewNote(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
