import { Provider } from "react-redux";

import "./css/App.css";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import store from "../redux/store";

function AppFunction() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default AppFunction;
