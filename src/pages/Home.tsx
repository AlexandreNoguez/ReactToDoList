import React, { useState } from 'react';

import Form from '../components/Form'
// import Buttons from '../components/Buttons'
import TodoListItem from '../components/TodoListItem'
import { Box, Button, Container, List, Paper } from '@mui/material'

interface IHomeProps {
    taskList: string | number;
    setTaskList: string | number;
    addTask: string | number;
}

const Home: React.FC = () => {

    const [taskList, setTaskList] = useState([])

    const handleAddTask = (addTask) => {
        setTaskList([...taskList, addTask])
    }

    const handleDeleteTask = (id: number) => {
        console.log(id);
        const filtered = taskList.filter((taskItem) => taskItem.id !== id);
        setTaskList(filtered);
    }

    const handleEditTask = (id: Number, editTask: string) => {
        console.log(id);
        console.log(editTask);
        console.log(taskList);

    }
    return (
        <Container maxWidth="sm">
            <List sx={{ marginTop: "2rem" }}>
                <Form handleAddTask={handleAddTask} />

                {taskList?.map((task) => (

                    <Box key={task.id} sx={{ marginY: ".5rem" }}>

                        <TodoListItem task={task} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} />
                    </Box>
                ))}
            </List>
        </Container >
    )
}

export default Home;