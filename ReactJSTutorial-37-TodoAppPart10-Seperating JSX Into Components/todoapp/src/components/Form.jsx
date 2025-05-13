import { useState } from 'react'
import style from './form.module.css'
export default function Form({todos, setTodos}){

    const [todo, setTodo] = useState("");
    
    function handleSubmit(e) {
        // console.log("calling handleSubmit");
        //console.log("todo", todo);
        //console.log("todos", todos);
    
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={style.inputStyle} onChange={(e) => setTodo(e.target.value)}
                type="text"
                value={todo}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}