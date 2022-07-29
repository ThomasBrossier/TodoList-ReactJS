import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}  />;
});

export default function SnackBarCall({duration, setError, open,message=null, error, setOpen}) {
  

  React.useEffect(()=>{
    setOpen(true);
    console.log('use')
  },[setOpen])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null)
    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={duration} anchorOrigin={{ vertical:'bottom', horizontal : 'right' }} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : "success"} sx={{ width: '100%' }}>
            {error ? error.message : message}
        </Alert>
      </Snackbar>
  );
}
