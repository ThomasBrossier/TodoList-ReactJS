import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}  />;
});

export default function SnackBarSave() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    setOpen(true);
  },[])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Vos listes ont été sauvegardé !
        </Alert>
      </Snackbar>
  );
}
