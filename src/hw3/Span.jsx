import React from 'react';
import classes from "./Span.module.css";


class Span extends React.Component {
    render = (props) => {
        return (
            <div>
            <span className={classes.span}>
                {this.props.text}
            </span>
            </div>
        )
    }
}
export default Span;

//домашка от меня №3: создать компоненту, у которой:
// - есть спан с числом, инпут и кнопка
// - при нажатии на кнопку число в спане увеличивается на 1
// - при нажатии на кнопку вызывается алерт с приветствием имени, введённым в инпуте
// - при нажатии на кнопку инпут должен очиститься
// (!!! обязательно проверить работу самому !!!)