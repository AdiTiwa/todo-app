import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './base-template.css'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './index.css'

const Imports = () => {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <script src="/__/firebase/8.3.0/firebase-app.js"></script>
            <script src="/__/firebase/init.js"></script>
        </div>
    )
}

class App extends Component {
    state = {
        todoItems: [
            {
                done: false,
                name: "Do Homework"
            }
        ],
        currentPage: 1
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

    render(){
        const { currentPage } = this.state
        let page;
        if (currentPage === 0) {
            page = <HomePage todos = {this.state.todoItems} removeTodo={this.removeTodoObject} handleAddTodo={this.handleAddTodo} />
        } else if (currentPage === 1) {
            page = <LoginPage />
        }


        return(
            <div>
                <Imports />
                { page }
            </div>
        )
    }
}

export default App;