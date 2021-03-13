import { ADD_TASK, CHANGE_STATUS_TASK, DELETE_TASK } from "../todoActions";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case CHANGE_STATUS_TASK:
      let newState = [...state];
      newState.forEach((item) => {
        if (item.id === action.payload.id) {
          item.active = !item.active;
          item.finishDate = new Date().getTime();
        }
      });
      return newState;
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      console.log("Bład!");
      return state;
  }
};
