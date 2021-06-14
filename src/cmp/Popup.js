// import React , {  useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { snackbarUIOpen } from '../redux';
// import { snackbarUIClose } from '../redux';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }

// const Popup = (props) => {
//     console.log("nnnnnnnnnnnnnn",props)
//     const dispatch = useDispatch()
//     const snackbarDataOpen = useSelector(state => state.snackbar.open)

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//           return;
//         }
//         dispatch(snackbarUIClose())        
//       };

//     useEffect(() => {
//         dispatch(snackbarUIOpen())
//     }, [])

//     return (
//         <div>
//         <Snackbar open={snackbarDataOpen} autoHideDuration={2000} onClose={handleClose}>
//           <Alert onClose={handleClose} severity={props.color}>
//              {props.message}                      
//           </Alert>
//       </Snackbar>   
//         </div>
//     )
// }

// export default Popup