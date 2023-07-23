import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ButtonModule from "remote/Button";
const Button = ButtonModule.default;
const App = () => (
    <div className="container">
        <Button />
        <div>Name: wp-host</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
