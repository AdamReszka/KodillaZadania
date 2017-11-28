import React from 'react';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const todos = this.props.todoList.map(item => <p key={item.id}>{item.text}</p>);
    console.log(todos);
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
