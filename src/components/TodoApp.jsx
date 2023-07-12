import { useState,useEffect } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import NavBar from "./NavBar"

const TodoApp = () =>{
    const [todos, setTodos] = useState([])
    const [filteredTodos,setFilteredTodos] = useState([])
    const [selectedOption, setSelectedOption] = useState("All")

   useEffect(()=>{
      filterTodos(selectedOption.value)
   },[todos,selectedOption])

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

   const filterTodos = (status) => {
      switch(status) {
         case "Completed" :
            setFilteredTodos(todos.filter((p) => p.isCompleted));
            break;
         case "Uncompleted" :
            setFilteredTodos(todos.filter((p) => !p.isCompleted));
            break;
         default :
         setFilteredTodos(todos); 
      }
   }

const selectHandler = (e) =>{
   setSelectedOption(e)
   filterTodos(e.value)
}

    return(
        <div className="container">
         <NavBar 
            unCompletedTodos={todos.filter((p) => !p.isCompleted).length}
            selectedOption={setSelectedOption}
            onChange={selectHandler}
            />
         <TodoForm submitTodo = {addTodo}/>
         <TodoList showTodos={filteredTodos} onComplete={completeTodo} onDelete={deleteTodos} onEdit={editTodo}/>
        </div>
    )
 }

 export default TodoApp