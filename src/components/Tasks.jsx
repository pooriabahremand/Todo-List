import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";

export default function Tasks() {
  const { tasks } = useContext(TodoContext);

  useEffect(() => {
    console.log("this is the tasks", tasks);
  }, [tasks]);

  const regularTasks = tasks.map((task) => task.isImportant === false);
  const importantTasks = tasks.map((task) => task.isImportant === true);

  if (tasks) {
  }
}
