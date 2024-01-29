import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import "./index.css";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home showAlert={showAlert} />}
            ></Route>
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            ></Route>
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            ></Route>
            <Route
              exact
              path="/logout"
              element={<Login showAlert={showAlert} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
