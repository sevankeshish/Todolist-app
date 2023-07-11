import { useState } from "react";
import Todo from "./Todo"
import TodoForm from "./TodoForm";

const TodoList = ({showTodos,onComplete,onDelete, onEdit}) => {
    const [editTodo, setEditTodo] = useState({id:null, text:"", isComplited:false})

    const editTodoHandler = () =>{
         onEdit(editTodo.id)
    }

    const renderTodos = () =>{
        if (showTodos.length === 0) return <p>add some todos</p>;

        return showTodos.map((p) => {
                return <Todo key={p.id} showTodos={p} completeHandler={()=>onComplete(p.id)} deletHandler={()=>onDelete(p.id)} editHandler={()=>setEditTodo(p)}/>
            })
    }

    return <div>{editTodo.id ? <TodoForm submitTodo={editTodoHandler}/> : renderTodos()}</div>
}

export default TodoList