import {useState} from 'react';
import axios from 'axios';
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

const errStatus = {
  message: '',
  status: false
}

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
  const [error, setError] = useState(errStatus);
  const classes = useStyles();


  const handleClose = () => {
    props.setModal({...props.modal, regOpen: false})
  };

  const validate = () => {
    if (register.username === "") {
      console.log("working?")
      return setRegister({...register, errorType: "username", errorMessage: "Please write your username"})
    }
    if (register.email === "") {
      return setRegister({...register, errorType: "email", errorMessage: "Please write your email"})
    }
    if (register.password === "") {
      return setRegister({...register, errorType: "password", errorMessage: "Please write your password"})
    }
    return true
  }

  const submitRegister = () => {
    if (validate(register)) {
      axios.post("api/users/register", {username: register.username, email: register.email, password: register.password})
        .then(response => {
          if (response.data === "username already exists") {
            return setRegister({...register, errorType: "username", errorMessage: response.data})
          }
          if (response.data === "email already exists") {
            return setRegister({...register, errorType: "email", errorMessage: response.data})
          }
          console.log(response)
          handleClose();
        })
        .catch(err => console.log(err))
    }
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
          <input 
          type='username' 
          placeholder='yourusername' 
          value={register.username}
          onChange={event => setRegister({...register, username: event.target.value})}
          />
          <input 
          type='email' 
          placeholder='youremail@email.com'
          value={register.email}
          onChange={event => setRegister({...register, email: event.target.value})}
          />
          <input 
          type='password'
          value={register.password}
          onChange={event => setRegister({...register, password: event.target.value})}
          />
          <Button color="primary" onClick={submitRegister}>Register</Button>
        {register.errorType && <div>{register.errorMessage}</div>}
        {error.status && <div>{error.message}</div>}
          </form>
        </Fade>
      </Modal>
   </>
  );
};

export default RegForm;