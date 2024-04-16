import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./App"

const NoteList = ({notes, setNotes}) => {
    const listaStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "30px"
      }
    const notasStyle = {
        margin: "5px 0" 
    }
    /*
    Este es un hook que permite realizar efectos secundarios por fuera de la función de renderizado. 
    En este caso, se crea un efecto secundario que se encarga de obtener las notas de la base de datos 
    y actualizar el estado de las notas.
    */
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return(
  <ul style={listaStyle}>
    <div style={notasStyle}>
        {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
        ))}
    </div>
  </ul>
  )
};

export default NoteList;