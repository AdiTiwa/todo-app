import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import App from './App'
import './index.css'

firebase.initializeApp({
    apiKey: "AIzaSyClnNTL2286DRY2XRguc9pADDgYpgPieXE",
    authDomain: "react-todo-app-9ccdf.firebaseapp.com",
    projectId: "react-todo-app-9ccdf",
    storageBucket: "react-todo-app-9ccdf.appspot.com",
    messagingSenderId: "187640269202",
    appId: "1:187640269202:web:0525e347415ae1665a594b"
});

ReactDOM.render(<App />, document.getElementById('root'))
