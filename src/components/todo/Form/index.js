import { useState } from 'react'

function Form({ showTodo }) {

    return (
        <div className='foot'>
            <footer className="footer">

                <span className="todo-count">
                    <strong>{showTodo.length}</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a className='selected'>All</a>
                    </li>
                    <li>
                        <a >Active</a>
                    </li>
                    <li>
                        <a >Completed</a>
                    </li>
                </ul>

                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </div >
    )
}

export default Form
