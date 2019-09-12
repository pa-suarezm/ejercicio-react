import React, { Component } from "react"
import Task from "./Task";

class Todo extends Component {

    state = {
        numberOfTasks: 0,
        numTask: 0,
        tasks: []
    }

    handleAddTask = () => {
        this.setState({numberOfTasks: this.state.numberOfTasks + 1,numTask: this.state.numTask + 1 , tasks: this.state.tasks.concat([`lorem ipsum No. ${this.state.numTask}`])});
    };

    handleDelete = (e) => {
        var pos = -1;
        let newTasks = this.state.tasks;
        for(let elems of newTasks){
            pos++;
            if(elems === e)
                break;
        }
        newTasks.splice(pos, 1);
        if(pos!==-1)
            this.setState({numberOfTasks: this.state.numberOfTasks - 1, tasks: newTasks});
    };

    render(){
        return(
        <div>
            <div>
            <h2>To do</h2>
                {this.state.tasks.map(elem =>
                <div class="task" key={elem}>
                    <Task description={elem}/>
                    <button id={elem} onClick={() => this.handleDelete(elem)}>Delete</button>
                </div>
                )}
            </div>
            <br></br>
            <button class="addTask" onClick={this.handleAddTask}>Add task</button>
        </div>
        );
    }

}

export default Todo;