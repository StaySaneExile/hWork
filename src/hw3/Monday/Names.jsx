import React from 'react';
import classes from './Names.module.css';


class Names extends React.Component {

    render  ()  {

        let drawName = this.props.names.map(name => <span>{name.name}</span>)

        return (
            <div className={classes.main}>
                {drawName}
            </div>


        )
    }
}

export default Names;

//домашка от меня №3: создать компоненту, у которой:
// - есть спан с числом, инпут и кнопка
// - при нажатии на кнопку число в спане увеличивается на 1
// - при нажатии на кнопку вызывается алерт с приветствием имени, введённым в инпуте
// - при нажатии на кнопку инпут должен очиститься
// (!!! обязательно проверить работу самому !!!)