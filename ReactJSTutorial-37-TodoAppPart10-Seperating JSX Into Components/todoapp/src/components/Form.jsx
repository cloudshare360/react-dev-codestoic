import { useState } from 'react'
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
                <input onChange={(e) => setTodo(e.target.value)}
                type="text"
                value={todo}
                />
                <button type="submit">Add </button>
            </form>
        </div>
    );
}