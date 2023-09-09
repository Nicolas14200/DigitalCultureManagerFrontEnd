import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="app">
  <Provider store={store}>
    <h1>Cahier de Culture Numérique</h1>
    <App />
  </Provider>
  </div>
);
reportWebVitals();
