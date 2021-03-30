import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { saveData } from "./redux/localStorage";
import { Provider } from "react-redux";

store.subscribe(() => {
  saveData({
    notesArray: store.getState().notesArray,
    noteObject: store.getState().noteObject,
    globalSearch: store.getState().globalSearch,
    sideMenu: store.getState().sideMenu,
    toggleTheme: store.getState().toggleTheme,
    toggleModal: store.getState().toggleModal,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
