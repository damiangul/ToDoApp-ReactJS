import {
  ADD_TASK,
  CHANGE_STATUS_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../todoActions";

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
    case EDIT_TASK:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        const { text, date, important, active, finishDate } = action.payload;

        return {
          id: item.id,
          text,
          date,
          important,
          active,
          finishDate,
        };
      });
    default:
      return state;
  }
};
