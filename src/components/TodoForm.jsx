import { useEffect, useRef, useState } from "react"

const TodoForm = ({submitTodo, edit}) =>{
    const [input, setInput] = useState(edit ? edit.text : "")
    const inputRef= useRef(null)

useEffect(()=>{
    inputRef.current.focus()
},[])

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
            <div className="formControl">
                <input 
                    ref={inputRef} 
                    type="text" 
                    value={input} 
                    onChange={changeHandler}
                    placeholder={edit ? "update value ..." : "add new todo ..."}
                />

                <button className={`btn ${edit ? "updateTodo" : "addTodo"}`} type="submit"> {edit ? "Update" : "Add"} </button>
            </div>
        </form>
    )
}

export default TodoForm