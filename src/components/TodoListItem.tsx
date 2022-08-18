import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { DeleteForeverRounded } from '@mui/icons-material';
import { ListItemText, Paper } from '@mui/material';


const TodoListItem: React.FC = () => {


    return (
        <Paper>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="comments">
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
                </ListItemButton>
                <ListItemText primary={`Tarefa1`} />
            </ListItem>
        </Paper>
    );
}

export default TodoListItem;
