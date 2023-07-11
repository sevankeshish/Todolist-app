const Todo = ({showTodos,completeHandler,deletHandler}) => {
    return ( 
        <div className="todo">
            <div onClick={completeHandler} className={showTodos.isCompleted ? "completed" : ""}>{showTodos.text}</div>
            <div>
                <button>Edit</button>
                <button onClick={deletHandler}>Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;