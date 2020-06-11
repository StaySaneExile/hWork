import React from 'react';
import  './Wednesday.css'
import {setStylePagesAC} from "../reducer";
import {connect} from "react-redux";


const Wednesday = (props) => {

    let styles = props.colorStyles.map(s => {
            return (
                <div>
                    <input id={s.id}
                           checked={s.status}
                           onChange={(e)=> {changeStyle(s.id, e.currentTarget.checked, s.title)}}
                           type="radio"/>
                    <span>{s.title}</span>
                </div>
            )})

    let changeStyle = (Id, status, style) => {
        props.changeStylePage(Id, status, style)
    }

    let newStyle = props.style === 'Dark' ? 'dark' :
        props.style === 'Blue' ? 'blue' : 'default'

    return (
        <div className={newStyle}>
            {styles}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        colorStyles: state.colorStyles,
        style: state.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStylePage: (Id, status, style) => {
            dispatch(setStylePagesAC(Id, status, style))
        }
    }
}




const ConnectedWednesday = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default ConnectedWednesday;

