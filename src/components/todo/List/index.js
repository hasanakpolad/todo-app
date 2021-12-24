import { useState } from 'react'

function List({ showTodo, getTodo }) {
    const [done, setDone] = useState(false)
    // const [models, setModel] = useState(showTodo)

    const changeValue = () => {
        setDone(!done)
    }

    const MarkAll = () => {
        showTodo.map((item) => item.done = true)
    }
    function deleteItem(id) {
        const newList = done.filter((item) => item.id !== id);
        setDone(...showTodo, newList)
    }
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" onClick={MarkAll} />
                <label htmlFor="toggle-all" >
                    Mark all as complete
                </label>

                <ul className='todo-list'>
                    {showTodo.map((item, key) =>
                        <li key={key} className={done ? 'completed' : ''}>
                            <input name='check' className='toggle' type="checkbox" defaultChecked={done} onChange={changeValue} />
                            <label >{item.text}</label>
                            <button className="destroy" onClick={() => deleteItem(item.id)}></button>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    )
}


export default List;
