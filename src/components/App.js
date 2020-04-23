import React from 'react';
import Typography from '@material-ui/core/Typography';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './States/useTodoState';

import './App.css';

const App = () => {

    const { todos, addTodo, deleteTodo } = useTodoState([])

    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todos
            </Typography>
            <TodoForm saveTodo={todoText => {
                const trimmed = todoText.trim();
                if (trimmed.length > 0) {
                    addTodo(trimmed)
                }
            }} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );

}

export default App;