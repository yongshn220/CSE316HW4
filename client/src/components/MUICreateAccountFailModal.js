import { useContext } from 'react'
import GlobalStoreContext from '../store';
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUICreateAccountFailModal() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);

    console.log(`abc : ${auth.currentModal}`)
    let modalState = !auth.isCurrentModalNone();
    let errorMessage = "The password is less than 8 characters or the email already exists. Try again.";
    function handleClose()
    {   
        auth.hideCreateAccountFailModal();
    }


    return (
        <Modal
            open={modalState}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Alert severity="error">
                    <AlertTitle>Invalid information</AlertTitle>
                    {errorMessage}
                </Alert>

                <Button variant="contained" onClick={handleClose}>OK</Button>
            </Box>
        </Modal>
    );
}
