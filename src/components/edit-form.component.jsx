import { useContext, useState, useEffect } from "react";

import { TodoContext } from "../contexts/todo-context";

function EditForm() {
  const { tasks, currentTask, setCurrentTask, setTasks, setIsEditing } =
    useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(tasks));
  }, [tasks]);

  const [newTask, setNewTask] = useState("");
  const [booleanCheck, setBooleanCheck] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const onChangedTasks = tasks.filter((task) => task.ID !== currentTask);
    const taskThatIsGonnaChange = tasks.filter(
      (task) => task.ID === currentTask
    );
    taskThatIsGonnaChange[0].task = newTask;
    taskThatIsGonnaChange[0].isImportant = booleanCheck;
    const updatedTaskList = [...onChangedTasks, ...taskThatIsGonnaChange];
    setTasks(updatedTaskList);
    setIsEditing(false);
    localStorage.setItem("taskData", JSON.stringify(updatedTaskList));
  };
  const inputChangeHandler = (event) => {
    setNewTask(event.target.value);
  };
  const checkChangeHandler = (event) => {
    setBooleanCheck(event.target.checked);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="What would you like to do "
        name="todo"
        onChange={inputChangeHandler}
        required
        autoFocus
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
      <button type="submit">Add</button>
    </form>
  );
}

export default EditForm;
