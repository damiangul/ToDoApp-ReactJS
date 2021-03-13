import React, { useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function AppFunction() {
  const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (text, date, important) => {
    const task = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };

    setCounter(counter + 1);
    setTasks([...tasks, task]);

    return true;
  };

  const deleteTask = (id) => {
    const tasksArr = [...tasks];
    const index = tasksArr.findIndex((item) => item.id === id);
    tasksArr.splice(index, 1);

    setTasks(tasksArr);
  };

  const changeTaskStatus = (id) => {
    const tasksArr = [...tasks];
    tasksArr.forEach((item) => {
      if (item.id === id) {
        item.active = !item.active;
        item.finishDate = new Date().getTime();
      }
    });

    setTasks(tasksArr);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask add={addTask} />
      <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />
    </div>
  );
}

export default AppFunction;
