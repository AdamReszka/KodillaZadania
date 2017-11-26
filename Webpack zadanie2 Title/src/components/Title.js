import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <p>Witaj w To-Do App!</p>
      <p>Wszystkich zadań: {this.props.todoData.length}</p>
      </div>
    )
  }
}

export default Title;
