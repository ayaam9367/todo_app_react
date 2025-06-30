import './App.css';
import TodoCard from './components/todo-card/todo-card';
function App() {

  return (
    <>
      <div className="search-bar">
        <input placeholder='search todos'></input>
      </div>
      <TodoCard title = {'Some bloody title'} description = {'Some bloody description'} />
    </>
  )
}

export default App
