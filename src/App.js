import React from "react";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
