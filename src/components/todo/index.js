import { useState } from 'react'
import Form from './Form'
import Heads from './Header'
import List from './List'
import './style.css'

function Todo() {
    const [todo, setTodo] = useState([])
    return (
        <div className='main'>
            <Heads addTodo={setTodo} showTodo={todo} />
            <List showTodo={todo} getTodo={setTodo} />
            <Form showTodo={todo} changeTodo={setTodo} />
        </div>
    )
}

export default Todo
