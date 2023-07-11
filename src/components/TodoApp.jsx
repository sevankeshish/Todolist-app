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
    const index = todos.findIndex((p) => p.id === id)
    const selectedTodos = {...todos[index]}
    selectedTodos.isCompleted = !selectedTodos.isCompleted
    const updatedTodos = [...todos]
    updatedTodos[index] = selectedTodos
    setTodos(updatedTodos)
 }

 const deleteTodos = (id) =>{
    const filteredTodos = todos.filter((p) => p.id !== id)
    setTodos(filteredTodos)
 }

    return(
        <div className="container">
            <TodoForm addTodo = {todoHandler}/>
            <TodoList showTodos={todos} onComplete={completeTodo} onDelete={deleteTodos}/>
        </div>
    )
 }

 export default TodoApp