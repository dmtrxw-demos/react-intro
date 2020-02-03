import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div className="card">
        <div className="card-title">{todo.title}</div>
        <div className="card-body">
          <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
