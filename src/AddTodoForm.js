import React, { useState } from 'react';
import axios from 'axios';

export default function AddTodoForm(props) {
  const [title, setTitle] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/todos', {
        title,
      })
      .then(function({ data }) {
        // Push new data to App.js
        props.addNewTodo(data);
      })
      .catch(console.log);
  };

  return (
    <form method="post" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Title"
        autoComplete="off"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
