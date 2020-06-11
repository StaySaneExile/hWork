import React from 'react';
import classes from "./Span.module.css";


class Span extends React.Component {
    render  ()  {
        return (
            <div>
            <span className={classes.span}>
                {this.props.count}
            </span>
            </div>
        )
    }
}
export default Span;

