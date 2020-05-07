import React from 'react';
import "./Tuesday.css"

class TodoHeader extends React.Component {
    state = {
        error: false,
        inputValue: ""
    }
    onAddTaskClick = () => {
        let newTitle = this.state.inputValue.trim();
        if(newTitle === "") {
            this.setState({error: true})
        } else {
            this.props.addTask(newTitle)
            this.setState({error: false,
            inputValue: ""})
    }}
    titleChange = (e) => {
        this.setState({
            error: false,
            inputValue: e.currentTarget.value})
    }
    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.onAddTaskClick();
        }
    }
    render = () => {
        let error = this.state.error ? "err" : "default";
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                        <input className={error}
                               onChange={this.titleChange}
                               onKeyPress={this.onKeyPress}
                               value={this.state.inputValue}
                               type="text"
                               placeholder="New task name"/>
                        <button className='button-add' onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}


export default TodoHeader;

