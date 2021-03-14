import React, { Component } from 'react'
import HomePage from './pages/HomePage'

const Imports = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>
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
        currentTab: 0,
    }

    removeTodoObject = (index) => {
        const {todos} = this.state

        this.setState({ 
            todoItems: todos.filter((todo, i) => {
                return i !== index
            }),
            currentTab: this.state.currentTab,
        })
    }

    changePage = (index) => {
        this.setState({
            todoItems: [...this.state.todoItems],
            currentTab: this.state.currentTab,
        })
    }

    handleAddTodo = (todo) => {
        this.setState({
            todoItems: [...this.state.todoItems, todo],
            currentTab: this.props.currentTab
        })
    }

    render(){
        const currentPage = this.state.currentTab;
        let page;
        if (currentPage === 0) {
            page = <HomePage />
        }

        return(
            <div>
                <Imports />
                {page}
            </div>
        )
    }
}

export default App;