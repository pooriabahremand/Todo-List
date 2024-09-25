import { Fragment, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todo-context";
import ImportantTask from "./important-task.component";
import RegTask from "./regular-task.component";
import EditForm from "./edit-form.component";
import RegularCompletedTask from "./completed.regular.component";
import ImportantCompletedTask from "./completed-important.component";
import Tasks from "./Tasks";

function TodoList() {
  const { isEditing, setTasks, tasks } = useContext(TodoContext);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("taskData"));
    setTasks(storedData);
  }, []);

  return (
    <Fragment>
      {isEditing ? <EditForm /> : <></>}
      <Tasks />
      <ImportantTask />
      <RegTask />
      <ImportantCompletedTask />
      <RegularCompletedTask />
    </Fragment>
  );
}

export default TodoList;
