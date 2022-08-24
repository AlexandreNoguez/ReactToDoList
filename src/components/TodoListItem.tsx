import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { DeleteForeverRounded } from '@mui/icons-material';
import { ListItemText, Paper } from '@mui/material';
import EditTaskDialog from './EditTaskDialog';


interface ITodoListItemProps {
    task: string;
    id: number
}

const TodoListItem = ({ task, handleDeleteTask, handleEditTask }: ITodoListItemProps) => {
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const handleCloseEditDialog = () => {
        setOpenEditDialog(!openEditDialog)
    }
    return (
        <Paper>
            <EditTaskDialog
                openEditDialog={openEditDialog}
                handleCloseEditDialog={handleCloseEditDialog}
                task={task}
                handleEditTask={handleEditTask} />
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                        <DeleteForeverRounded />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={task.task} onClick={() => setOpenEditDialog(true)} />
                </ListItemButton>
            </ListItem>
        </Paper>
    );
}

export default TodoListItem;
