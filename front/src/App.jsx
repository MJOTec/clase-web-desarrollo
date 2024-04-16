import { useState } from "react";
import NoteList from "./NoteList";
import Header from "./Header";
import NoteForm from "./NoteForm";
export const baseUrl = 'http://localhost:3001/api/notes'


const App = () => {
  /*
  El useState es un hook encargado de crear variables de estado, donde el primer argumento es el valor 
  inicial de la variable y el segundo argumento es una función que actualiza el valor. En este caso, 
  se crean dos variables de estado: newNote y notes, que se inicializan con valores vacíos.
  newNote es para generar una nueva y notes es para guardar todas las que existen.
  */
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header/>
      <NoteList notes={notes} setNotes={setNotes}/>
      <NoteForm setNotes={setNotes} newNote={newNote} setNewNote={setNewNote} notes={notes}/>
    </div>
  );
};

export default App;