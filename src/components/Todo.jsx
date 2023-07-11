const Todo = ({showTodos,completeHandler,deletHandler,editHandler}) => {
    return ( 
        <div className="todo">
            <div onClick={completeHandler} className={showTodos.isCompleted ? "completed" : ""}>{showTodos.text}</div>
            <div>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deletHandler}>Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;