import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./app/App";
import "./scss/utilities/_classes.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
