import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";

function RegTask() {
  const {
    tasks,
    setTasks,
    setIsEditing,
    setCurrentTask,
    completedTask,
    setCompletedTask,
  } = useContext(TodoContext);
  // console.log(tasks);
  useEffect(() => {
    console.log(tasks);
  }, []);
  if (tasks) {
    let regularTasks = tasks.filter((task) => task.isImportant === false);

    const deleteTask = (ID) => {
      let newArray = tasks.filter((todo) => todo.ID !== ID);
      setTasks(newArray);
      localStorage.setItem("taskData", JSON.stringify(newArray));
    };

    const editFormHandler = (ID) => {
      setIsEditing(true);
      setCurrentTask(ID);
    };

    const checkHandler = (task) => {
      let updatedArray;
      if (completedTask) {
        updatedArray = [...completedTask, task];
      } else {
        updatedArray = [task];
      }
      console.log(updatedArray);
      setCompletedTask(updatedArray);
      localStorage.setItem("CompletedData", JSON.stringify(updatedArray));
      // console.log(tasks);
      let newArray = tasks.filter((todo) => todo.ID !== task.ID);
      setTasks(newArray);
      console.log(newArray);
      localStorage.setItem("taskData", JSON.stringify(newArray));
    };

    if (regularTasks.length > 0) {
      return (
        <div className="regular-task-container">
          <ul>
            {tasks
              .filter((task) => task.isImportant === false)
              .map((task) => {
                return (
                  <li key={task.ID}>
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
                          editFormHandler(task.ID);
                        }}
                      >
                        edit
                      </button>
                      <button
                        onClick={() => {
                          checkHandler(task);
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
    } else {
      return;
    }
  } else {
    return;
  }
}
export default RegTask;
