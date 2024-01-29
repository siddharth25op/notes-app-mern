import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import noteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Note added successfully.", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="">
        <TextField
          onChange={onChange}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          minLength={5}
          required={true}
          value={note.title}
        />
        <TextField
          onChange={onChange}
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          minLength={5}
          required={true}
          value={note.description}
        />
        <TextField
          onChange={onChange}
          name="tag"
          label="Tag"
          variant="outlined"
          fullWidth
          margin="normal"
          value={note.tag}
        />
        <Button
          disabled={note.title.length < 5 || note.description.length < 5}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleClick}
        >
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default AddNote;
