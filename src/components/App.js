import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 0;

  state = {
    tasks: [],
  };

  deleteTask = (id) => {
    // console.log('delete ' + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    // console.log('change ' + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((item) => {
      if (item.id === id) {
        item.active = !item.active;
        item.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };

    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
