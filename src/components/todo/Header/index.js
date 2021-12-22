import { useState, useEffect } from 'react'

const initialValues = { text: '', done: false }
function Heads({ addTodo, showTodo }) {
    const [search, setSearch] = useState(initialValues)
    useEffect(() => {
        setSearch(initialValues)
    }, [showTodo])
    const onChangeInput = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (search.text === '') return false
        addTodo([...showTodo, search])
    }
    return (
        <div className='head'>
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input property="newTodo" className="new-todo" placeholder="Niydiyon emmi?" name='text' onChange={onChangeInput} value={search.text} autoFocus />
            </form>
        </div >
    )
}

export default Heads
