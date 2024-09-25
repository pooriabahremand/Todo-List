import { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/todo-context";
// import { onSubmitHandler } from "../utils/utils";

function TodoInput() {
  const { setTasks, tasks } = useContext(TodoContext);

  const [inputValue, setInputValue] = useState("");
  const [booleanCheck, setBooleanCheck] = useState(false);
  const inputRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      task: inputValue,
      isImportant: booleanCheck,
      ID: uuidv4(),
    };
    console.log(uuidv4());
    let updatedTaskList;
    if (tasks) {
      updatedTaskList = [...tasks, newTask];
    } else {
      updatedTaskList = [newTask];
    }
    setTasks(updatedTaskList);
    inputRef.current.focus();
    event.target.elements[0].value = "";
    setBooleanCheck(false);
    localStorage.setItem("regData", JSON.stringify(updatedTaskList));
  };
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const checkChangeHandler = (event) => {
    setBooleanCheck(event.target.checked);
  };
  return (
    <div className="todo_input">
      <h1 className="toDoHeading">TO DO</h1>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          className="task_input"
          type="text"
          placeholder="What would you like to do "
          name="todo"
          onChange={inputChangeHandler}
          required
          autoFocus
          ref={inputRef}
        />
        <div className="check-box">
          <input
            type="checkbox"
            id="important"
            name="important"
            onChange={checkChangeHandler}
            checked={booleanCheck}
          />
          <label htmlFor="important">important task</label>
        </div>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default TodoInput;
