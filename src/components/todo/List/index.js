import { useState } from 'react'

function List({ showTodo }) {

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all" >
                    Mark all as complete
                </label>

                <ul className='todo-list'>
                    {showTodo.map((item) =>
                        <li key={item.id} className={showTodo.done ? 'completed' : ''}>
                            <input name='check' className='toggle' type="checkbox" />
                            <label >{item.text}</label>
                            <button className="destroy"></button>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    )
}


export default List;
