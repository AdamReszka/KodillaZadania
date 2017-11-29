import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import style from './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'write a new component'
      },{
        id: 2,
        text: 'set virtual machine'
      },{
        id: 3,
        text: 'install kali linux'
      },{
        id: 4,
        text: 'download tor browser'
      },{
        id: 5,
        text: 'enjoy the Internet'
      }]
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
    event.preventDefault();
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return <div className={style.TodoApp}>
          <Title todoData={this.state.data} todoName="To-Do App"/>
          <TodoForm addTodo={this.addTodo}/>
          <TodoList todoList={this.state.data} removeTodo={this.removeTodo} />
           </div>
  }
}

export default App;
