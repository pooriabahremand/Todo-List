import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";

function ImportantTask() {
  const {
    tasks,
    setTasks,
    importantTask,
    setImportantTask,
    setCurrentTask,
    setIsEditing,
    importantCompletedTask,
    setImportantCompletedTask,
  } = useContext(TodoContext);

  useEffect(() => {
    if (tasks) {
      let importantFilteredArray = tasks.filter(
        (task) => task.isImportant === true
      );

      if (importantFilteredArray !== 0) {
        setImportantTask(importantFilteredArray);
      }
      importantFilteredArray = [];
    }
  }, [tasks]);

  const deleteTask = (ID) => {
    let newArray = tasks.filter((todo) => todo.ID !== ID);
    setTasks(newArray);
    localStorage.setItem("regData", JSON.stringify(newArray));
  };

  const editFormHandler = (ID) => {
    setIsEditing(true);
    setCurrentTask(ID);
  };

  const checkHandler = (task) => {
    let updatedArray;
    if (importantCompletedTask) {
      updatedArray = [...importantCompletedTask, task];
    } else {
      updatedArray = [task];
    }
    setImportantCompletedTask(updatedArray);
    localStorage.setItem(
      "importantCompletedTask",
      JSON.stringify(updatedArray)
    );
    const newArray = tasks.filter((todo) => task.ID !== todo.ID);
    setTasks(newArray);
    localStorage.setItem("regData", JSON.stringify(newArray));
  };

  return (
    <div className="important-tag">
      <ul>
        {importantTask.map((currentTask) => {
          return (
            <li key={currentTask.ID}>
              <div className="important_task">
                <p>{currentTask.task}</p>
                <span>important</span>
                <button
                  onClick={() => {
                    deleteTask(currentTask.ID);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    editFormHandler(currentTask.ID);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    checkHandler(currentTask);
                  }}
                >
                  Done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ImportantTask;
