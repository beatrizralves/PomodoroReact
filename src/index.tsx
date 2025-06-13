import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // </React.StrictMode>
  //sem o strict mode para evitar o erro de renderização dupla
  <App></App>
);
