import './App.css';
import React from 'react';
import Checkbox from './components/Checkbox'
import TodosData from './components/todosData'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: TodosData
    }
  }
  render(){
    const todoItems = this.state.todos.map(item => <Checkbox key={item.id} item={item}/>)
    return (
      <div className="todo-list">
          {todoItems}
      </div>
    );
  }
 
}

export default App;
