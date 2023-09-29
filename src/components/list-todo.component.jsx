import { Fragment, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";
import ImportantTask from "./important-task.component";
import RegTask from "./regular-task.component";
import EditForm from "./edit-form.component";
import RegularCompletedTask from "./completed.regular.component";
import ImportantCompletedTask from "./completed-important.component";

function TodoList() {
  const { isEditing, tasks, importantTask, setTasks } = useContext(TodoContext);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("regData"));
    setTasks(storedData);
  }, []);

  if (isEditing) {
    return (
      <Fragment>
        <EditForm />
        <Fragment>
          <ImportantTask />
          <RegTask />
          <ImportantCompletedTask />
          <RegularCompletedTask />
        </Fragment>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ImportantTask />
        <RegTask />
        <ImportantCompletedTask />
        <RegularCompletedTask />
      </Fragment>
    );
  }
}

export default TodoList;
