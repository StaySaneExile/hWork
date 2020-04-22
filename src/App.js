import React from 'react';
import classes from './App.module.css';
import Button from "./hw3/Button";
import Span from "./hw3/Span";
import Names from "./hw3/Names";
import Input from "./hw3/Input";


class App extends React.Component {

    text = React.createRef();
    state = {
        def: {
            count: 6,
            title: 'Hello '
        },
        names: [
            {name: 'Gadjimurad'},
        ]
    };

    plus = () => {
        let newName = {name: this.text.current.value};
        this.setState(
            {names: [...this.state.names, newName]});
        this.setState(
            {def: {count: this.state.def.count + 1}});
        alert(this.state.def.title + this.text.current.value);
        this.text.current.value = "";
    };

    render() {
        return (
            <div className={classes.main}>
                <div className={classes.name}>
                    <Names title={this.state.names}/>
                </div>
                <Button plus={this.plus}/>
                <Span text={this.state.def.count}/>
                <Input text={this.text}/>
            </div>
        )
    }
}

export default App;




