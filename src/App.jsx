import TodoInput from "./components/input-todo.component";
import TodoList from "./components/list-todo.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
// test for comment
export default App;
