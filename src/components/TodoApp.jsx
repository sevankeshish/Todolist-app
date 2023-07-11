import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const TodoApp = () =>{
    const [todos, setTodos] = useState([])

 const todoHandler = (input) =>{
    // console.log(input);
    const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        isCompleted: false
    }
    setTodos([...todos, newTodo])
 }

 const completeTodo = (id) =>{
    console.log(id);
    const index = todos.findIndex((p) => p.id === id)
    const selectedTodo = {...todos[index]}
    selectedTodo.isCompleted = !selectedTodo.isCompleted 
    const updatedTodos = [...todos]
    updatedTodos[index] = selectedTodo
    setTodos(updatedTodos)
 }

    return(
        <div className="container">
            <TodoForm addTodo = {todoHandler}/>
            <TodoList showTodos={todos} onComplete={completeTodo}/>
        </div>
    )
 }

 export default TodoApp