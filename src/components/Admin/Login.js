import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const loginData = {
  email: '',
  password: '',
  errorMessage: '',
  errorType: ''
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginForm = props => {
  const [login, setLogin] = useState(loginData);
  const classes = useStyles();


  const handleClose = () => {
    props.setModal({...props.modal, loginOpen: false})
  };

  const submitLogin = () => {
    console.log("logged in")
    handleClose();
  }

  return (
   <>
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={props.modal.loginOpen}
      >
        <Fade in={props.modal.loginOpen}>
          <form onSubmit={event => {
            event.preventDefault()
            submitLogin();
          }}>
          <input type='email' placeholder='youremail@email.com'/>
          <input type='password'/>
          <Button color="primary" onClick={submitLogin}>Log in</Button>
          </form>
        </Fade>
      </Modal>
   </>
  );
};

export default LoginForm;