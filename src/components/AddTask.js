import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/todoActions";

import "./css/AddTask.css";

function AddTask({ text = "", id = 0, important = false, handleSwitch }) {
  // const { text, date, id, active, important, finishDate } = props;

  const minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";

  const [textAdd, setTextAdd] = useState(text);
  const [checkedAdd, setCheckedAdd] = useState(important);
  const [dateAdd, setDateAdd] = useState(minDate);
  const dispatch = useDispatch();

  const handleText = (e) => setTextAdd(e.target.value);
  const handleCheckbox = (e) => setCheckedAdd(e.target.checked);
  const handleDate = (e) => setDateAdd(e.target.value);
  const handleClick = () => {
    const taskObject = {
      id,
      text: textAdd,
      date: dateAdd,
      important: checkedAdd,
    };

    id ? dispatch(editTask(taskObject)) : dispatch(addTask(taskObject));

    if (id) {
      handleSwitch();
    } else {
      setTextAdd("");
      setCheckedAdd(false);
      setDateAdd(minDate);
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        name=""
        id=""
        placeholder="Dodaj zadanie"
        value={textAdd}
        onChange={handleText}
      />
      <input
        type="checkbox"
        checked={checkedAdd}
        id="important"
        onChange={handleCheckbox}
      />
      <label htmlFor="important">Priorytet</label>
      <br />
      <label htmlFor="date">Do kiedy zrobić?</label>
      <input
        type="date"
        value={dateAdd}
        min={minDate}
        max={maxDate}
        onChange={handleDate}
      />
      <br />
      <button onClick={handleClick}>{id ? "Edytuj" : "Dodaj"}</button>
    </div>
  );
}

export default AddTask;
