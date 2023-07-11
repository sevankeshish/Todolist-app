import Todo from "./Todo"

const TodoList = ({showTodos,onComplete,onDelete}) => {
    const renderTodos = () =>{
        if (showTodos.length === 0) return <p>add some todos</p>;

        return showTodos.map((p) => {
                return <Todo key={p.id} showTodos={p} completeHandler={()=>onComplete(p.id)} deletHandler={()=>onDelete(p.id)}/>
            })
    }

    return <div>{renderTodos()}</div>
}

export default TodoList