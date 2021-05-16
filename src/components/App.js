import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actionCreators from "../actions/actionCreators";
import { StocksPage } from "./StocksPage";
import logo from "../images/logo.png";
import "../css/App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.doStartListeningToData());
  }, []);

  return (
    <div className="app">
      <div className="header-container">
        <h1>
          {`Live Stock Information `}
          <img className="img-logo" alt="logo" src={logo}></img>
        </h1>
      </div>
      <main className="main-container">
        <StocksPage></StocksPage>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
