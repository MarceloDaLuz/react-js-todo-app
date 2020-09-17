import React from 'react';
import { TodoItem, Button, CheckIcon, TrashIcon, Text } from './style';

const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(t => t.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    };

    return (
        <TodoItem id={todo.id}>
            <Text status={todo.completed}>{todo.text}</Text>
            <Button onClick={completeHandler} completed><CheckIcon /></Button>
            <Button onClick={deleteHandler} deteled><TrashIcon /></Button>
        </TodoItem>
    );
}

export default Todo