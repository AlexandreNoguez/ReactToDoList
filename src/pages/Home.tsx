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

    const [taskList, setTaskList] = useState<IHomeProps | null[]>([])

    const handleAddTask = (addTask: string) => {
        setTaskList([...taskList, addTask])
    }


    return (
        <Container maxWidth="sm">
            <List sx={{ marginTop: "2rem" }}>
                <Form handleAddTask={handleAddTask} />

                {taskList.map((tasks) => (
                    <Box sx={{ marginY: ".5rem" }}>
                        <TodoListItem />
                    </Box>
                ))}
            </List>
        </Container >
    )
}

export default Home;