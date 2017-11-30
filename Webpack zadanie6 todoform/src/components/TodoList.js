import React from 'react';
import style from '../containers/App.css';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const todos = this.props.todoList.map((item, index) => {
      console.log('ok to jest item' + item.id);
      return(
        <div className={style.todoSingleItem} key={item.id}>
          <Todo removeTodo={this.props.removeTodo} myIndex={index} item={item}/>
        </div>

      )
    });
    return (
      <div className={style.todoItemsList}>
        {todos}
      </div>
    );
  }
}

export default TodoList;
