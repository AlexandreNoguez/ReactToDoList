import { Box, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

interface IInputProps {
    handleAddTask: any
}

const Form = ({ handleAddTask }: IInputProps) => {
    const [task, setTask] = useState('')

    return (
        <Box>
            <TextField
                handleAddTask={handleAddTask}
                id="filled-basic"
                label="Tarefa"
                variant="filled"
                onChange={(e) => setTask(e.target.value)}
                fullWidth
            />
            <Button variant='contained' onClick={() => console.log(taskList)}
            >
                Adicionar
            </Button>
        </Box>
    )

}

export default Form;