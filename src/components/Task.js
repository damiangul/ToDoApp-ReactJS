import React from "react";

function Task(props) {
  const style = {
    color: "red",
  };

  const handleTaskDone = () => props.change(id);
  const handleDeleteTask = () => props.delete(id);

  const { text, date, id, active, important, finishDate } = props.task;

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
