import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginForm from './Admin/Login'
import RegForm from './Admin/Register'

const modalState = {
  regOpen: false,
  loginOpen: false
};



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const NavBar = () => {
  const [modal, setModal] = useState(modalState);
  const classes = useStyles();

  return (
    <>
       <Button variant="contained" color="primary" onClick={() => {
      console.log("clicked")
      setModal({...modal,regOpen: true})
      console.log(modal)
}}
      >
        Register
      </Button>
      {modal.regOpen && <RegForm
      modal={modal}
      setModal={setModal}
      />}
    <Button variant="contained" color="primary" onClick={() => {
      console.log("clicked")
      setModal({...modal,loginOpen: true})
      console.log(modal)
}}
      >
        Login
      </Button>
      {modal.loginOpen && <LoginForm
      modal={modal}
      setModal={setModal}
      />}
    </>
  );
};
export default NavBar;