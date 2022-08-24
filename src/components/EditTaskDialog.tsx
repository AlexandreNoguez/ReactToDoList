import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTaskDialog({
    openEditDialog,
    handleCloseEditDialog,
    task,
    handleEditTask
}) {

    return (
        <Dialog
            open={openEditDialog}
            onClose={handleCloseEditDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                {"Editar Tarefa?"}
            </DialogTitle>
            <DialogContent>
                <TextField fullWidth defaultValue={task.task} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCloseEditDialog(false)}>Cancelar</Button>
                <Button onClick={handleEditTask} autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
