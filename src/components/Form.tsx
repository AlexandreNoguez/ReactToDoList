import { Box, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

interface IInputProps {
    handleAddTask: any
}

const Form = ({ handleAddTask }: IInputProps) => {
    const [task, setTask] = useState('')
    const [idTask, setIdTask] = useState(0)

    const handleAddNewTask = (task) => {
        const taskObject = { task: task, id: idTask }
        setIdTask(idTask + 1)
        handleAddTask(taskObject)
    }
    return (
        <Paper sx={{ padding: "1rem" }}>
            <Box sx={{ display: "flex", gap: '.5rem' }}>
                <TextField
                    handleAddTask={handleAddTask}
                    id="filled-basic"
                    label="Tarefa"
                    variant="filled"
                    onChange={(e) => setTask(e.target.value)}
                    fullWidth
                />
                <Button variant='contained' onClick={() => handleAddNewTask(task)}
                >
                    Adicionar
                </Button>
            </Box>
        </Paper>
    )

}

export default Form;