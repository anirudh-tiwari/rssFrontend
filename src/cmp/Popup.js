import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { snackbarUIOpen } from '../redux';
// import { snackbarUIClose } from '../redux';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Popup = () => {
  debugger;
  const [openElement, setOpenElement] = useState(false);
  // const dispatch = useDispatch()
  // const snackbarDataOpen = useSelector(state => state.snackbar.open)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenElement(false);
  };

  useEffect(() => {
    debugger;
    setOpenElement(true);
  }, []);

  return (
    <div>
      <Snackbar
        open={openElement}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Bookmark Added
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Popup;
