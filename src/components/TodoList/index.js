import React from 'react';

import { Container, Ul } from './style'
import Todo from '../Todo';

const TodoList = ({ todos, setTodos, filteredTodos}) => {
    return (
        <Container>
            <Ul>
                {filteredTodos.map(todo => 
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        todos={todos} 
                        setTodos={setTodos}
                    />
                )}
            </Ul>
        </Container>
    );
}

export default TodoList