import './App.css';
import Checkbox from './components/Checkbox'
import TodosData from './components/todosData'
function App() {
  const todoItems = TodosData.map(item => <Checkbox key={item.id} item={item}/>)
  return (
    <div className="todo-list">
        {todoItems}
    </div>
  );
}

export default App;
