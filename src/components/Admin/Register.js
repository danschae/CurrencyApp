import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const regData = {
  username: '',
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

const RegForm = props => {
  const [register, setRegister] = useState(regData);
  const classes = useStyles();


  const handleClose = () => {
    props.setModal({...props.modal, regOpen: false})
  };

  const submitRegister = () => {
    console.log("registered!")
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
        open={props.modal.regOpen}
      >
        <Fade in={props.modal.regOpen}>
          <form onSubmit={event => {
            event.preventDefault()
            submitRegister();
          }}>
          <input type='username' placeholder='your username'/>
          <input type='email' placeholder='youremail@email.com'/>
          <input type='password'/>
          <Button color="primary" onClick={submitRegister}>Log in</Button>
          </form>
        </Fade>
      </Modal>
   </>
  );
};

export default RegForm;