export const ADD_TASK = "ADD_TASK";
export const CHANGE_STATUS_TASK = "CHANGE_STATUS_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

let idNumber = 0;
export const addTask = ({ text, date, important }) => ({
  type: ADD_TASK,
  payload: {
    id: ++idNumber,
    text,
    date,
    important,
    active: true,
    finishDate: null,
  },
});

export const changeStatusTask = (id) => ({
  type: CHANGE_STATUS_TASK,
  payload: {
    id,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const editTask = ({ id, text, date, important }) => ({
  type: EDIT_TASK,
  payload: {
    id,
    text,
    date,
    important,
    active: true,
    finishDate: null,
  },
});
