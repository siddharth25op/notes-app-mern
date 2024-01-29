import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import noteContext from "../context/notes/NoteContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="col-md-4">
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ minWidth: 275 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {note.title}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Tag: {note.tag}
              </Typography>

              <Typography variant="body2">{note.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted successfully.", "success");
                }}
              >
                Delete
              </Button>
              <Button
                size="small"
                onClick={() => {
                  updateNote(note);
                }}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default NoteItem;
