import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const TodoApp = () =>{
    const [todos, setTodos] = useState([])

 const todoHandler = (input) =>{
    console.log(input);
    const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        isCompleted: false
    }
    setTodos([...todos, newTodo])
 }

    return(
        <div className="container">
            <TodoForm addTodo = {todoHandler}/>
            <TodoList/>
        </div>
    )
 }

 export default TodoApp