import React from "react";
import classes from "../App.module.css";

class Input extends React.Component {
    render() {
        return (
            <div>
                <input className={classes.input}
                       ref={this.props.text}/>
            </div>
        )
    }
}
export default Input;