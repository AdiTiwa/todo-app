import React, { Component } from 'react'
import TodoTable from "../components/TodoTable"


class HomePage extends Component {

    render() {
        return (
            <div>
                <div class = "columns">
                    <TodoTable className = "column" />
                </div>
            </div>
        )
    }
}

export default HomePage;