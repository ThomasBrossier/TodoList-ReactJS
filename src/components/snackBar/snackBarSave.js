import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}  />;
});

export default function SnackBarSave({duration, open, error, setOpen}) {
  

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
      <Snackbar open={open} autoHideDuration={duration} anchorOrigin={{ vertical:'bottom', horizontal : 'right' }} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {error ? error.message : 'Vos listes ont été sauvegardé !'}
        </Alert>
      </Snackbar>
  );
}
