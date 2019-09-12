import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Todo from "./components/Todo";
import Doing from "./components/Doing";
import Done from "./components/Done";

/*
Three imports: To do, Doing, Done
*/
/*
const element = <div>Placeholder</div>;
ReactDOM.render(element, document.getElementById("root"));
*/

const element = 
    <div>
        <hr></hr>
        <h1>My Kanban App</h1>
        <hr></hr>
        <div id="content">
            <div class="board" id="todo">

            </div>
            <div class="board" id="doing">

            </div>
            <div class="board" id="done">
                
            </div>
        </div>
    </div>
;

ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<Todo/>, document.getElementById("todo"));
ReactDOM.render(<Doing/>, document.getElementById("doing"));
ReactDOM.render(<Done/>, document.getElementById("done"));