import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoActions";

import "./css/AddTask.css";

function AddTaskF(props) {
  const minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";

  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);
  const dispatch = useDispatch();

  const handleText = (e) => setText(e.target.value);
  const handleCheckbox = (e) => setChecked(e.target.checked);
  const handleDate = (e) => setDate(e.target.value);
  const handleClick = () => {
    // const add = props.add(text, date, checked);
    const taskObject = {
      text,
      date,
      important: checked,
    };

    dispatch(addTask(taskObject));

    setText("");
    setChecked(false);
    setDate(minDate);
  };

  return (
    <div className="form">
      <input
        type="text"
        name=""
        id=""
        placeholder="Dodaj zadanie"
        value={text}
        onChange={handleText}
      />
      <input
        type="checkbox"
        checked={checked}
        id="important"
        onChange={handleCheckbox}
      />
      <label htmlFor="important">Priorytet</label>
      <br />
      <label htmlFor="date">Do kiedy zrobić?</label>
      <input
        type="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleDate}
      />
      <br />
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}

export default AddTaskF;
