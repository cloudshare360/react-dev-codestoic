import TodoItem from './TodoItem'
export default function TodoList({todos}) {
    const divStyleWithBorder = {
        border: "2px solid black",
        padding: "10px",
        margin: "10px 0",
      };

    return (
        <div style={divStyleWithBorder}>
            <div>
                <h2>
                    <u>Todos list values are :-</u>
                </h2>
            </div>
            <div>
            {todos.map((item, index) => (
                <TodoItem item={item} key={index} />
            ))}
            {console.log(todos)}
            </div>
        </div>
     );
}