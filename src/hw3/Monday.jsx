import React from 'react';
import classes from "./Monday.module.css";
import Names from "./Monday/Names";
import Button from "./Monday/Button";
import Span from "./Monday/Span";
import Input from "./Monday/Input";


class Monday extends React.Component {
    render ()  {
        return (
            <div className={classes.main}>
                <Names names={this.props.names} />
                <Button plus={this.props.plus}
                        inputValue={this.props.inputValue}/>
                <Span count={this.props.count} />
                <Input changeInputValue={this.props.changeInputValue}
                       inputValue={this.props.inputValue}
                       plus={this.props.plus}  />
            </div>
        )
    }
}
export default Monday;

