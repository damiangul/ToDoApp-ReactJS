import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, changeStatusTask } from "../redux/todoActions";

function Task(props) {
  const style = {
    color: "red",
  };

  const dispatch = useDispatch();
  const { text, date, id, active, important, finishDate } = props.task;

  const handleTaskDone = () => dispatch(changeStatusTask(id));
  const handleDeleteTask = () => dispatch(deleteTask(id));

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button onClick={handleTaskDone}>Zostało zrobione</button>
          <button onClick={handleDeleteTask}>Usuń</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong> (zrobić do {date})
          <br />- potwierdzenie wykonania {finish}
          <button onClick={handleDeleteTask}>Usuń</button>
        </p>
      </div>
    );
  }
}

export default Task;
