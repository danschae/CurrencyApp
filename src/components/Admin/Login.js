// import {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Fade from '@material-ui/core/Fade';

// const loginData = {
//   username: '',
//   email: '',
//   password: '',
//   errorMessage: '',
//   errorType: ''
// };

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const LoginForm = () => {
//   const [login, setLogin] = useState(loginData);
//   const [open, setOpen] = useState(false);
//   const classes = useStyles();

//   const handleOpen = () => {
//     // open from navbar
//   };

//   const handleClose = () => {
//     // close from navbar
//   };

//   return (
//    <>
//          <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <h2 id="transition-modal-title">Transition modal</h2>
//             <p id="transition-modal-description">react-transition-group animates me.</p>
//           </div>
//         </Fade>
//       </Modal>
//    </>
//   );
// };

// export default LoginForm;