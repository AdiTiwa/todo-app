import React, { Component } from 'react'

const LoginGUI = props => {
    return (
        <div className = "column">
            <div className = "columns">
                <div className = "column">
                    <p>Username:</p>
                    <p>Password:</p>
                </div>
                <div className = "column">
                    <input type = "text" name = "loginUser" id = "loginUser" onChange={props.handleChange} />
                    <input type = "password" name = "loginPass" id = "loginPass" onChange={props.handleChange}/>
                </div>
            </div>
            <button className = "is-success">Login</button>
        </div>
    )
}

const RegisterGUI = props => {
    return (
        <div className = "column">
            <div className = "columns">
                <div className = "column">
                    <p>Username:</p>
                    <p>Password:</p>
                    <p>Password (again):</p>
                </div>
                <div className = "column">
                    <input type = "text" name = "registerUser" id = "registerUser" onChange={props.handleChange} />
                    <input type = "password" name = "registerPass" id = "registerPass" onChange={props.handleChange}/>
                    <input type = "password" name = "registerPassX2" id = "registerPassX2" onChange={props.handleChange}/>
                </div>
            </div>
            <button className = "is-warning">Sign Up</button>
        </div>
    )
}

class LoginPage extends Component {
    state = {
        'loginUser': '',
        'loginPass': '',
        'registerUser': '',
        'registerPass': '',
        'registerPassX2': ''
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className = "container columns">
                <LoginGUI />
                <RegisterGUI />
            </div>
        )
    }
}

export default LoginPage;