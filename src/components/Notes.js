import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }

    // eslint-disable-next-line
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = useState(false);
  const updateNote = (currentNote) => {
    setOpen(true);
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const close = () => setOpen(false);

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setOpen(false);
    e.preventDefault();
    props.showAlert("Note updated successfully.", "success");
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <Modal open={open} onClose={close} closeAfterTransition>
        <Box sx={style}>
          <form action="">
            <TextField
              onChange={onChange}
              value={note.etitle}
              name="etitle"
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              required={true}
            />
            <TextField
              onChange={onChange}
              value={note.edescription}
              name="edescription"
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              required={true}
            />
            <TextField
              onChange={onChange}
              value={note.etag}
              name="etag"
              label="Tag"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              disabled={note.etitle.length < 5 || note.edescription.length < 5}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClick}
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
      <div className="notes-cards-row">
        {notes.length === 0 ? (
          <Typography variant="h5" component="div">
            Start saving notes right away
          </Typography>
        ) : (
          <Typography variant="h5" component="div">
            Your Notes
          </Typography>
        )}
        <div className="notes-cards-column">
          <div className="container">
            <div className="notes-cards-column">
              {notes.map((note) => {
                return (
                  <NoteItem
                    key={note._id}
                    updateNote={updateNote}
                    showAlert={props.showAlert}
                    note={note}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
