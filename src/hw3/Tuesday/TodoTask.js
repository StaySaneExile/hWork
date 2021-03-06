import React from 'react';
import './Tuesday.css';

class TodoTask extends React.Component {
    state = {
        isEditMode: false,
        taskPriority: false,
        priority: 'Low'
    }


    activatedEditMode = () => {
        this.setState({isEditMode: true})
    };
    deActivatedEditMode = () => {
        this.setState({isEditMode: false})
    }
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    };
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id)
    }
    taskPriority = () => {
        this.setState({taskPriority: true})
    }
    changeTaskPriority = (newPriority) => {
        this.setState({
            priority: newPriority,
            taskPriority: false
        })
    }


    render = () => {
        let classDone = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className={classDone}>
                <span onClick={this.onDeleteTask} className='delete'/>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>

                {this.state.isEditMode
                    ? <input value={this.props.task.title}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             onBlur={this.deActivatedEditMode}/>
                    : <span onClick={this.activatedEditMode}>
                      {this.props.task.id}: {this.props.task.title}</span>
                }
                {this.state.taskPriority
                    ? <div className='priority'>
                        <span onClick={ ()=> this.changeTaskPriority('Low')}>Low</span>
                        <span onClick={ ()=> this.changeTaskPriority('Middle')}>Middle</span>
                        <span onClick={ ()=> this.changeTaskPriority('High')}>High</span>
                    </div>
                    : <span onClick={this.taskPriority}> - {this.state.priority}</span>
                }

            </div>

        );
    }
}

export default TodoTask;

