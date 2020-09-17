import React, { useState, useEffect } from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

//Import styles
import { App as Container } from './globalStyle';

function App() {
  //State
  const [inputText, setInputText ] = useState('');
  const [todos, setTodos ] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Effect once time
  useEffect(() => {
    getLocal();
  }, [])
  //Effect
  useEffect(() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed ===  true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed ===  false));
        break;
      default:
        setFilteredTodos(todos);
    }

    saveLocal();
  }, [todos, status]);

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }
  return (
    <Container>

      <Header/>

      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}/>

      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}/>

    </Container>
  );
}

export default App;
