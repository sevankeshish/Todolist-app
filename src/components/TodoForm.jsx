import { useState } from "react"

const TodoForm = ({submitTodo}) =>{
    const [input, setInput] = useState("")

    const changeHandler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()

        if(!input){
            alert("enter todo !")
            return;
        }
        submitTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={input} onChange={changeHandler}/>
            <button type="submit"> Add </button>
        </form>
    )
}

export default TodoForm