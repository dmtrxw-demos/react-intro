import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
