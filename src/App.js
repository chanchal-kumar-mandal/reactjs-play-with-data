import StaticData from './components/StaticData';
import ApiData from './components/ApiData';
import SortData from './components/SortData';
import CountData from './components/CountData';
import TodoList from './components/TodoList';
import Parent from './components/Parent';
import './App.css';



function App() {
  return (
    <>
      <h2 style={{textAlign: 'center', fontFamily: 'monospace'}}>Data Representation In React</h2>
      <div className="app">
        <div className="app-component">
          <CountData />
        </div>
        <div className="app-component">
          <TodoList />
        </div>
        <div className="app-component">
          <Parent />
        </div>
      </div>
      <div className="app">
        <div className="app-component">
          <StaticData />
        </div>
        <div className="app-component">
          <ApiData />
        </div>
        <div className="app-component">
          <SortData />
        </div>
      </div>
    </>
  );
}

export default App;
