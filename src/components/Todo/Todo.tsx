import { useState } from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import "./Todo.css"
import TodoList from '../TodoList/TodoList'

function Todo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <Header title="Todo" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo
