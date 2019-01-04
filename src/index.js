// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
//serimport store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

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
