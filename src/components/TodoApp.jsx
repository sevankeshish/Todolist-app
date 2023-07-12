import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import NavBar from "./NavBar"

const TodoApp = () =>{
    const [todos, setTodos] = useState([])

 const addTodo = (input) =>{
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

 const editTodo = (id, newValue) => {
   const index = todos.findIndex((p) => p.id === id)
   const selectedTodos = {...todos[index]}
   selectedTodos.text = newValue
   const updatedTodos = [...todos]
   updatedTodos[index] = selectedTodos
   setTodos(updatedTodos) }

    return(
        <div className="container">
         <NavBar unCompletedTodos={todos.filter((p) => !p.isCompleted).length} />
         <TodoForm submitTodo = {addTodo}/>
         <TodoList showTodos={todos} onComplete={completeTodo} onDelete={deleteTodos} onEdit={editTodo}/>
        </div>
    )
 }

 export default TodoApp