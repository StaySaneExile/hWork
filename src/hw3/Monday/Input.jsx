import React from "react";
import "./Input.css";

class Input extends React.Component {
    state = {
        error: true
    }

    changeValue = (e) => {
            this.setState({error: false})
            this.props.changeInputValue(e.currentTarget.value)
        if(e.currentTarget.value === "") {
            this.setState({error: true})
        }
    }
    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.props.plus();
        }
    }

    render () {
        let error = this.state.error ? "error" : "input";
        return (
            <div>
                <input className={error}
                       onKeyPress={this.onKeyPress}
                       onChange={this.changeValue}
                       value={this.props.inputValue}
                />
            </div>
        )
    }
}
export default Input;
