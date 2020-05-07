import React from 'react';
import TodoHeader from "./TodoHeader";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";
import "./Tuesday.css"



class Tuesday extends React.Component {
    state = {
        tasks: [],
        filterValue: "All"
    };
    nextTaskId = 0;

    saveState =()=> {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state', stateAsString)
    }
    restoreState = () => {
        let state = {
            tasks:[],
            filterValue: "All"
        }
        let stateAsString = localStorage.getItem('state');
        if(stateAsString){
            state = JSON.parse(stateAsString);
        }
        this.setState(state, ()=>{
            this.state.tasks.forEach(t=>{
                if(t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
    }
    componentDidMount() {
        this.restoreState();
    }

    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: ' low'};
        this.nextTaskId++;
        this.setState({tasks: [...this.state.tasks, newTask]}, this.saveState);

    };
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})
    };
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }
    changeTask = (taskId, newPropValue) => {
        let newTasks = this.state.tasks.map ( t => {
            if(t.id === taskId) {
                return {...t, ...newPropValue}
            }
            return t;
        })
        this.setState({tasks: newTasks}, this.saveState)
    }
   onDeleteTask = (taskId) => {
        const filteredArray = this.state.tasks.filter( (t)=> {
            return taskId !== t.id
        } )
       this.setState({
           tasks: filteredArray
       });
   }

    render = () => {

        let filtredTasks = this.state.tasks.filter(t => {
            switch (this.state.filterValue) {
                case 'Active':
                    return t.isDone === false;
                case 'Completed':
                    return t.isDone === true;
                case 'All':
                    return true;
            }
        })

        return (
            <div className="App">
                <div className="todoList">

                    <TodoHeader addTask={this.addTask} />
                    <TodoTasks tasks={filtredTasks}
                               onDeleteTask={this.onDeleteTask}
                               changeTitle={this.changeTitle}
                               changeStatus={this.changeStatus}/>
                    <TodoFooter filterValue={this.state.filterValue}
                                changeFilter={this.changeFilter}/>
                </div>
            </div>

        )
    }
}
export default Tuesday;

