import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertComponent = (props) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {props.alert && (
        <Alert severity={props.alert.type}>{props.alert.msg}</Alert>
      )}
    </Stack>
  );
};

export default AlertComponent;
