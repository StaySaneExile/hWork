import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import Burger from "./Burger";


class Navbar extends React.Component {
    state = {
        filterValue: 'nav'
    }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})
    }
    onFilterActive = () => {
        if (this.state.filterValue === 'navActive') {
            this.changeFilter('nav')
        } else {
            this.changeFilter('navActive')
        }

    }

    render = (props) => {

        let classForNav = this.state.filterValue === 'nav' ? 'nav' : 'navActive';

        return (
            <div className={classForNav}>
                <div className='main'>
                    <Burger onClick={this.onFilterActive}/>
                    <div className='item'>
                        <NavLink activeClassName='active' to='/monday'>Monday</NavLink>
                    </div>
                    <div className='item'>
                        <NavLink activeClassName='active' to='/tuesday'>Tuesday</NavLink>
                    </div>
                    <div className='item'>
                        <NavLink activeClassName='active' to='/wednesday'>Wednesday</NavLink>
                    </div>
                </div>
            </div>

        )
    }
}

export default Navbar;

