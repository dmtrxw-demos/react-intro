import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Reactive
    this.state = {
      todos: [],
      message: 'Hello world',
      counter: 1,
    };

    // Static
    // this.foobar = 'foobar';

    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/todos')
      .then(({ data }) => {
        this.setState({
          todos: data,
        });
      })
      .catch(console.log);
  }

  addNewTodo(todo) {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }

  deleteTodo(id) {
    // Delete todo
    axios.delete('http://localhost:4000/todos/' + id).then(({ data }) => {
      this.setState({
        todos: this.state.todos.filter((todo) => todo.id !== id),
      });
    });
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTodoForm addNewTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
