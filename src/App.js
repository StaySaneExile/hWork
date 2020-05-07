import React from 'react';
import classes from './App.module.css';
import Navbar from "./hw3/Navbar";
import {HashRouter, Route} from "react-router-dom";
import Monday from "./hw3/Monday";
import Tuesday from "./hw3/Tuesday/Tuesday";


class App extends React.Component {

    state = {
        def: {
            count: 8,
            title: 'Hello '
        },
        names: [
            {name: 'Gadjimurad'},
        ],
        inputValue: "",
        title: ""

    };
    plus = () => {
        this.setState(
            {
                def: {count: this.state.def.count + 1},
                title: this.state.inputValue,
                names: [...this.state.names, {name: this.state.inputValue}]
            })
        alert("Hello " + this.state.inputValue);
        this.state.inputValue = '';

    };

    changeInputValue = (newTitle) => {
        this.setState({
            inputValue: newTitle
        });
    }

    render() {
        return (
            <HashRouter>
                <div className={classes.main}>
                    <Navbar/>
                    <Route path='/monday' render={() =>
                        <Monday names={this.state.names}
                                inputValue={this.state.inputValue}
                                plus={this.plus}
                                changeInputValue={this.changeInputValue}
                                count={this.state.def.count}/>}/>
                    <div className={classes.tuesday}>
                        <Route path='/tuesday' render={() =>
                            <Tuesday/>}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;




