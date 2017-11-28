import React from 'react';
import style from '../containers/App.css';
class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={style.itemButton} onClick={() => this.props.removeTodo(this.props.item.id)}>
        <p><span>{this.props.myIndex+1}</span>{this.props.item.text}</p>
      </div>
    )
  }
}

export default Todo;
