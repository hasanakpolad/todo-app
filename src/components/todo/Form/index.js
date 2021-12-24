import { useState } from 'react'

function Form({ showTodo, changeTodo }) {
    const filteredActive = showTodo.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes('false'))
    })
    // const filteredAll = showTodo;
    // const filteredCompleted = showTodo.filter((item) => {
    //     return Object.keys(item).some((key) =>
    //         item[key].toString().toLowerCase().includes('true'))
    // })
    const [data, setData] = useState([])
    const onChangeSelect = () => {
        changeTodo(...showTodo, data)
    }

    return (
        <div className='foot'>
            <footer className="footer">

                <span className="todo-count">
                    <strong>{filteredActive.length}</strong>
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
