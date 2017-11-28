import React from 'react';
import style from '../containers/App.css';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.removeMe = this.removeMe.bind(this);
  }
  removeMe() {
    console.log('it works');
  }
  render() {
    const todos = this.props.todoList.map(item => <p onClick={this.removeMe} key={item.id}>{item.text}</p>);
    return (
      <div className={style.todoItemsList}>
        {todos}
      </div>
    );
  }
}

export default TodoList;
