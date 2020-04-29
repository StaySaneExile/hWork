import React from "react";
import "./Input.css";

class Input extends React.Component {
    state = {
        error: true
    }

    changeValue = (e) => {
        this.setState({error: false})
        this.props.changeInputValue(e.currentTarget.value)
        if(e.currentTarget.value === "") {
            this.setState({error: true})
        }
    }
    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.props.plus();
        }
    }

    render = () => {
        let error = this.state.error ? "error" : "input";
        return (
            <div>
                <input className={error}
                       onKeyPress={this.onKeyPress}
                       onChange={this.changeValue}
                       value={this.props.inputValue}
                />
            </div>
        )
    }
}
export default Input;
//- в своём проекте (домашка №4) вынести инпут в
// отдельную компоненту (если вы этого не сделали) и "прокачать" его
//   1. подсветка при попытке ввести пустое значение,
//   2. отправка текста по нажатию "Enter",
//   3. сделать его контролируемым (локальный стейт, как на уроке))
// ...что бы не прокачивать в будущем каждый инпут, а использовать уже готовый
// (или "допрокачивать" готовый) установите в свой проект react-router-dom и используя
// <HashRouter> вместо <BrowserRouter> (так как он лучше работает на gh-pages)
// сделайте 2 страницы: понедельник, вторник (подсмотрите в соцсети "как" или смело обращайтесь на
// "хэлп" по любым вопросам), всё сделанное (домашка №4) отобразите на странице понедельника
// - сделайте выезжающий сбоку/сверху/снизу (на выбор/или все сразу для практики)
// навбар со списком страниц, обёрнутых в <NavLink> со ссылками на соответствующие
// страницы, текущую страницу в списке подсвечивать