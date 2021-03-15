import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Done?</td>
                <td>Todo Name</td>
                <td>Actions</td>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.todoList.map((row, index) => {
        return (
            <tr key={index}>
                <td><input type = "checkbox" /></td>
                <td>{row.name}</td>
                <td><button onClick={() => props.removeTodo(index)}>Delete</button></td>
            </tr>
        )
    });
    
    return <tbody>{rows}</tbody>
}

const TodoTable = (props) => {
    const { todos, removeTodo } = props

    return (
        <div className = "column is-10">
            <table className = "centered-table">
                <TableHeader />
                <TableBody todoList = {todos} removeTodo = {removeTodo} />
            </table>
        </div>
    )
}

export default TodoTable