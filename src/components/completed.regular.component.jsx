import { useContext, useEffect } from "react";
import { TodoContext } from "./../contexts/todo-context";

function RegularCompletedTask() {
  const { completedTask, setCompletedTask, setTasks, tasks } =
    useContext(TodoContext);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("regCompletedData"));
    setCompletedTask(storedData);
  }, []);

  const deleteTask = (ID) => {
    let newArray = completedTask.filter((todo) => todo.ID !== ID);
    setCompletedTask(newArray);
    localStorage.setItem("regCompletedData", JSON.stringify(newArray));
  };

  const checkHandler = (task) => {
    let newArray = completedTask.filter((todo) => todo.ID !== task.ID);
    setCompletedTask(newArray);
    localStorage.setItem("regCompletedData", JSON.stringify(newArray));
    const [undoneTask] = completedTask.filter((todo) => todo.ID === task.ID);
    console.log(undoneTask);
    setTasks([...tasks, undoneTask]);
    localStorage.setItem("regData", JSON.stringify([...tasks, undoneTask]));
  };

  if (completedTask) {
    return (
      <div className="regular-completed-task-container">
        <ul>
          {completedTask.map((task) => {
            return (
              <li key={task.ID} className="completed_task">
                <div className="task">
                  <p>{task.task}</p>
                  <button
                    onClick={() => {
                      deleteTask(task.ID);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      checkHandler(task);
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

export default RegularCompletedTask;
