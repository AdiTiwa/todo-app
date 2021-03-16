/* eslint-disable no-unused-vars */
// Module Imports
import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// Custom Imports
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './base-template.css'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './index.css'

// firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: "AIzaSyClnNTL2286DRY2XRguc9pADDgYpgPieXE",
        authDomain: "react-todo-app-9ccdf.firebaseapp.com",
        projectId: "react-todo-app-9ccdf",
        storageBucket: "react-todo-app-9ccdf.appspot.com",
        messagingSenderId: "187640269202",
        appId: "1:187640269202:web:0525e347415ae1665a594b"
    });
}

const auth = firebase.auth();
const firestore = firebase.firestore()

class App extends Component{
    state = {
        todoItems: [],
        currentPage: 0,
        loggedIn: false
    }

    removeTodoObject = (index) => {
        const todos = this.state.todoItems

        this.setState({ 
            todoItems: todos.filter((todo, i) => {
                return i !== index
            }),
            currentPage: this.state.currentPage
        })
    }

    handleAddTodo = (todo) => {
        this.setState({
            todoItems: [...this.state.todoItems, todo],
            currentPage: this.state.currentPage
        })
    }

    

    changePage = (index) => {
        this.setState({
            todoItems: [...this.state.todoItems],
            currentPage: index
        })
    }

    sendLoginNotification = (notificationObject) => {
        const userDisplayName = auth.currentUser.displayName;

        notificationObject = <div>
                <div class="notification is-success is-light">
                    <button class="delete"></button>
                    Don't fear <strong>{userDisplayName}</strong>! You were logged in successfully!
                </div>
        </div>;
    }

    render() {
        let notification

        const isLoggedIn = auth.currentUser();
        const { currentPage } = this.state
        let page
        if (currentPage === 0) {
            page = <HomePage todos = {this.state.todoItems} removeTodo={this.removeTodoObject} handleAddTodo={this.handleAddTodo} changePage = {this.changePage} />
        } else if (currentPage === 1 && !isLoggedIn) {
            page = <LoginPage changePage = {this.changePage}/>
        } else if (currentPage === 1 && isLoggedIn) {
            page = <HomePage todos = {this.state.todoItems} removeTodo={this.removeTodoObject} handleAddTodo={this.handleAddTodo} changePage = {this.changePage} />
            this.changePage(0)
            
        }

        return(
            <div>
                { page }
            </div>
        )
    }
}

export default App;