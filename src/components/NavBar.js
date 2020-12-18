import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    <Button variant="contained" color="primary">
        Login
      </Button>
    </>
  );
};
export default NavBar;