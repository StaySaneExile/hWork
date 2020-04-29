import React from 'react';
import classes from './App.module.css';
import Button from "./hw3/Button";
import Span from "./hw3/Span";
import Names from "./hw3/Names";
import Input from "./hw3/Input";
import Navbar from "./hw3/Navbar";
import {HashRouter, Route} from "react-router-dom";


class App extends React.Component {

    //text = React.createRef();
    state = {
        def: {
            count: 6,
            title: 'Hello '
        },
        names: [
            {name: 'Gadjimurad'},],
        inputValue: "",
        title: ""
    };

    plus = () => {
        this.setState({
            count: this.state.def.count + 1,
            title: this.state.inputValue,
            names: [...this.state.names, {name: this.state.inputValue}],
        })
        alert("Hello " + this.state.inputValue);
    };

    changeInputValue = (newTitle) => {
        this.setState({
                inputValue: newTitle
            }
        )
    }

    render() {
        return (
            <HashRouter>
                <div className={classes.main}>
                    <Navbar/>
                    <Route path='/monday' render={() =>
                        <Names title={this.state.names}/>}/>
                    <Route path='/monday' render={() =>
                        <Button plus={this.plus}/>}/>
                    <Route path='/monday' render={() =>
                        <Span text={this.state.def.count}/>}/>
                    <Route path='/monday' render={() =>
                        <Input plus={this.plus}
                               changeInputValue={this.changeInputValue}/>}/>
                </div>
            </HashRouter>
        )
    }
}

export default App;




