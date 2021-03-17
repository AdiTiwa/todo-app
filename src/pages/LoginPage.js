import React, { Component } from 'react'
import firebase from 'firebase/app'

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

const OtherLogins = props => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider);

        this.props.changePage(0)
    }

    return (
        <div className = "container columns">
            <button onClick = {signInWithGoogle}>Google</button>
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
        const { auth, changePage } = this.props;

        return (
            <div className = "centered-container">
                <div className = "columns">
                    <LoginGUI handleChange = {this.handleChange} changePage = { changePage }/>
                    <RegisterGUI handleChange = {this.handleChange} changePage = { changePage }/>
                </div>
                <OtherLogins auth = {auth} changePage = { changePage }/>
            </div>
        )
    }
}

export default LoginPage;