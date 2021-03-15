import React, { Component } from 'react'

class AddTodo extends Component {
    initialState = {
        name: 'New Todo'
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name } = this.state;

        return (
            <div className = "column">
                <form id = "add-todo">
                    <input className = "entry" type = "text" name = "name" id = "name" value = {name} onChange={this.handleChange} />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>
            </div>
        );
    }

}

export default AddTodo;