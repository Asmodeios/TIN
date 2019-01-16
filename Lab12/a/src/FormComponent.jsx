import React from 'react'
import './form.css';
import Label from './LabelComponent.jsx'
import Text from './TextComponent.jsx'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: props.text,
            password: props.numbers,
            email: props.email,
            loginMessage: "",
            emailMessage: "",
            passwordMessage: ""
        }
    }

   validateLogin(login) {
        if(login.length <= 6) {
            this.setState({ loginMessage: "must be 6 symbols long"})
        } else {
            this.setState({ loginMessage: ""})
        }
   }

   validatePassword(pass) {
       if (/\d/.test(pass) && /[a-zA-Z]/.test(pass) && pass.length >= 6) {
            this.setState({ passwordMessage: ""})
       } else {
            this.setState({ passwordMessage: "must be 6 symbols long, atleast 1 character and 1 digit"})
       }
   }

   validateEmail(email) {
       if (/\w+@\w+\.\w+/.test(email)) {
            this.setState({ emailMessage: ""})
       } else {
            this.setState({ emailMessage: "invalid email"})
       }
   }

    loginHandleChange(event) {
        let login = event.target.value;
        this.validateLogin(login)
        this.setState({ login: login })
        console.log(this.state)
    }

    passwordHandleChange(event) {
        let pass = event.target.value;
        this.validatePassword(pass)
        this.setState({ password: pass })
        
    }

    emailHandleChange(event) {
        let email = event.target.value;
        this.validateEmail(email)
        this.setState({ email: email })
    }


    render() {
        return (
            <form>
                <Label labelName="login" value="Login: "/>
                <input type="text" id="login" value={this.state.login} onChange={this.loginHandleChange.bind(this)}></input><Text text={this.state.loginMessage}/>
                <br></br>
                <Label labelName="email" value="Email: "/>
                <input type="text" id="email" value={this.state.email} onChange={this.emailHandleChange.bind(this)}></input><Text text={this.state.emailMessage}/>
                <br></br>
                <Label labelName="password" value="Password: "/>
                <input type="password" id="password" value={this.state.password} onChange={this.passwordHandleChange.bind(this)}></input><Text text={this.state.passwordMessage}/>
            </form>
        );
    }
}

export default Form