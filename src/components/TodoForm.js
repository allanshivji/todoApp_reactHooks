import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from './States/useInputState';

const TodoForm = ({ saveTodo }) => {
    // saveTodo is a prop

    const { value, reset, onChange } = useInputState('');
 
        return (
            <form onSubmit={event => {
                event.preventDefault();
                saveTodo(value)
                reset();
            }}>
                <TextField
                    variant="outlined"
                    placeholder="Add your todo"
                    margin="normal"
                    onChange={onChange}
                    value={value}
                />
            </form>
        );

}

export default TodoForm;