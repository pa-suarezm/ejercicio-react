import React, { Component } from "react";

class Task extends Component {

    state = {
        description: this.props.description
    }

    render(){
        return(
            <div>
                <h4>Task No. 1</h4>
                <hr></hr>
                <p>{this.state.description}</p>
            </div>
        );
    }

}

export default Task;