import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector((store) => store.tasks);

  const active = tasks.filter((item) => item.active === true);
  const done = tasks.filter((item) => item.active === false);

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((item) => <Task key={item.id} task={item} />);

  const doneTasks = done.map((item) => <Task key={item.id} task={item} />);

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak Zadań</p>}
      </div>

      <hr />

      <div className="done">
        <h2>
          Zadania zrobione <em>{done.length}</em>
        </h2>
        {done.length > 5 && (
          <span
            style={{
              fontSize: "10px",
            }}
          >
            Wyświetlonych jest 5 ostatnich elementów
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}

export default TaskList;
