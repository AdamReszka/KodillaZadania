import React from 'react';
import style from '../containers/App.css';

class Title extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={style.titleBelt}>
      <p>Witaj w {this.props.todoName}</p>
      <p>Wszystkich zadań: {this.props.todoData.length}</p>
      </div>
    )
  }
}

export default Title;
