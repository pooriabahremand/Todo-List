import { createContext, useState } from "react";

export const TodoContext = createContext({
  tasks: [],
  setTasks: () => null,
  importantTask: [],
  setImportantTask: () => null,
  isEditing: false,
  setIsEditing: () => null,
  currentTask: {},
  setCurrentTask: () => null,
  completedTask: [],
  setCompletedTask: () => null,
  importantCompletedTask: [],
  setImportantCompletedTask: () => null,
});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [importantTask, setImportantTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [completedTask, setCompletedTask] = useState([]);
  const [importantCompletedTask, setImportantCompletedTask] = useState([]);
  const value = {
    tasks,
    importantTask,
    setImportantTask,
    setTasks,
    isEditing,
    setIsEditing,
    currentTask,
    setCurrentTask,
    completedTask,
    setCompletedTask,
    importantCompletedTask,
    setImportantCompletedTask,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
