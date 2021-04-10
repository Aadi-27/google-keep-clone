import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { isDarkModeOn } from "./redux/toggleTheme";
import { saveData } from "./redux/localStorage";
import Header from "./components/dashboard/header";
import Main from "./components/dashboard/main/";
import SideMenu from "./components/dashboard/main/sideMenu";

function App() {
  const isDarkMode = useSelector(isDarkModeOn);

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

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header isDarkMode={isDarkMode} />
          <SideMenu isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
