import React from 'react';
import style from '../containers/App.css';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (


<form className={style.myTodoForm} onSubmit={(event) => this.props.addTodo(this.props.val)}>
  <input type="text" value={this.state.value} name="name" placeholder="Wpisz kolejne zadanie:" onChange={this.handleChange}/>
  <input type="submit" value="Utwórz"/>
</form>

    )
  }
}

export default TodoForm;
