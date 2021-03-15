import React from 'react'
import TodoTable from "../components/TodoTable"
import AddTodo from "../components/AddTodo"

const HomePage = props => {
    const { todos, removeTodo, handleAddTodo, changePage } = props
    
    return (
        <div className = "container">
            <h1 className = "title">Todo App</h1>
            <div className = "columns is-mobile is-8">
                <TodoTable todos = {todos} removeTodo = {removeTodo}/>
                <AddTodo handleSubmit = {handleAddTodo}/>
            </div>
            <p className = "is-6">To Save Todos: <button className = "is-success is-6" onClick = {changePage} >Login/Signup</button></p>
        </div>
    )
}

export default HomePage;