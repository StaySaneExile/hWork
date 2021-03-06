import React from 'react';
import classes from './App.module.css';
import Navbar from "./hw3/Navbar";
import {HashRouter, Route} from "react-router-dom";
import Monday from "./hw3/Monday";
import Tuesday from "./hw3/Tuesday/Tuesday";
import {connect} from "react-redux";
import Wednesday from "./hw3/Wednesday/Wednesday";
import {setLoadingAC} from "./hw3/reducer";


class App extends React.Component {

    state = {
        def: {
            count: 8,
            title: 'Hello '
        },
        names: [
            {name: ''},
        ],
        inputValue: "",
        title: "",


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

    componentDidMount() {
        setTimeout(() => {
            let loading = false
            this.props.newLoading(loading)
        }, 300)
    }

    render() {
        return (
            <HashRouter>
                <div className={classes.main}>
                    <Navbar/>
                    {this.props.loading
                        ? <span className={classes.loading} />
                        : <div>
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
                            <div >
                                <Route path='/wednesday' render={() =>
                                    <Wednesday />}/>
                            </div>
                        </div>
                    }
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newLoading: (loading) => {
            dispatch(setLoadingAC(loading))
        }
    }
}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;




