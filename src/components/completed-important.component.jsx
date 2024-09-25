import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";

function ImportantCompletedTask() {
  const { importantCompletedTask, setImportantCompletedTask, tasks, setTasks } =
    useContext(TodoContext);

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("importantCompletedTask")
    );
    setImportantCompletedTask(storedData);
  }, []);

  const deleteTask = (ID) => {
    let newArray = importantCompletedTask.filter((todo) => todo.ID !== ID);
    setImportantCompletedTask(newArray);
    localStorage.setItem("importantCompletedTask", JSON.stringify(newArray));
  };

  const checkHandler = (task) => {
    const newArray = importantCompletedTask.filter(
      (todo) => task.ID !== todo.ID
    );
    setImportantCompletedTask(newArray);
    localStorage.setItem("importantCompletedTask", JSON.stringify(newArray));
    const updatedArray = [...tasks, task];
    setTasks(updatedArray);
    localStorage.setItem("regData", JSON.stringify(updatedArray));
  };

  if (importantCompletedTask) {
    return (
      <div className="important-completed-task-container">
        <ul>
          {importantCompletedTask.map((currentTask) => {
            return (
              <li key={currentTask.ID} className="important_completed_task">
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
                      checkHandler(currentTask);
                    }}
                  >
                    undone
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return;
  }
}

export default ImportantCompletedTask;
