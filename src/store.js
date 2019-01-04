import { createStore } from "redux";

//const initialState = {};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUB":
      state -= action.payload;
      break;
  }
  return state;
};

const store = createStore(reducer, 1);

store.dispatch({
  type: "ADD",
  payload: 100
});
store.dispatch({
  type: "SUB",
  payload: 1
});

store.subscribe(() => {
  console.log("Hitted");
});

export default store;
