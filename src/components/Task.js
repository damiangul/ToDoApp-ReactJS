import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, changeStatusTask } from "../redux/todoActions";
import AddTask from "./AddTask";

import "./css/buttons.css";

function Task(props) {
  const style = {
    color: "red",
  };

  const dispatch = useDispatch();
  const [switchEdit, setSwitchEdit] = useState(false);
  const { text, date, id, active, important, finishDate } = props.task;

  const handleTaskDone = () => dispatch(changeStatusTask(id));
  const handleDeleteTask = () => dispatch(deleteTask(id));
  const handleEditTask = () => setSwitchEdit(!switchEdit);

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button className="buttonDone" onClick={handleTaskDone}>
            Zostało zrobione
          </button>
          <button className="buttonEdit" onClick={handleEditTask}>
            Edytuj
          </button>
          <button className="buttonDelete" onClick={handleDeleteTask}>
            Usuń
          </button>
        </p>
        {switchEdit ? (
          <AddTask {...props.task} handleSwitch={handleEditTask} />
        ) : null}
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong> (zrobić do {date})
          <br />- potwierdzenie wykonania {finish}
          <button className="buttonDelete" onClick={handleDeleteTask}>
            Usuń
          </button>
        </p>
      </div>
    );
  }
}

export default Task;
