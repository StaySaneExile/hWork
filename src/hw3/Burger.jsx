import React from 'react';
import  './Navbar.css';


class Burger extends React.Component {

    render (props) {
        return (
            <div onClick={this.props.onClick} className='burger'> </div>
        )
    }
}
export default Burger;

