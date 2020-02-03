import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

export default function App(props) {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  // componentDidMount
  useEffect(() => {
    console.log('useEffect axios');
    axios
      .get('http://localhost:4000/todos')
      .then(({ data }) => {
        setTodos(data);
      })
      .catch(console.log);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('useEffect message');
  }, [message]);


  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    axios
      .delete('http://localhost:4000/todos/' + id)
      .then(function({ data }) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      });
  };

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" onChange={(event) => setMessage(event.target.value)} />
      <AddTodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}
