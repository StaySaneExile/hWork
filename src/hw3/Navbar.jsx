import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {
    render = (props) => {
        return (
            <div className={classes.nav}>
                <div className={classes.item}>
                    <NavLink activeClassName={classes.active}
                             to='/monday'>Monday
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink activeClassName={classes.active}
                             to='/tuesday'>Tuesday
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Navbar;

