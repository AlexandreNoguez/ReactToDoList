import * as React from 'react';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

interface IButtonProps {
    onClick: MouseEvent;
}

const Buttons = ({ onClick }: IButtonProps) => {
    return (
        <Button
            variant="contained"
            onClick={() => onClick}

        >Adicionar</Button>
    )



}

export default Buttons;