import React from 'react';
import classes from './Button.module.css';


class Button extends React.Component {

    render (props) {
        return (
            <div>
                <button className={classes.button}
                        onClick= {this.props.plus} >
                    Milkyway
                </button>
            </div>

        )
    }
}
export default Button;

//домашка от меня №3: создать компоненту, у которой:
// - есть спан с числом, инпут и кнопка
// - при нажатии на кнопку число в спане увеличивается на 1
// - при нажатии на кнопку вызывается алерт с приветствием имени, введённым в инпуте
// - при нажатии на кнопку инпут должен очиститься
// (!!! обязательно проверить работу самому !!!)