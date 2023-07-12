const Todo = ({showTodos,completeHandler,deletHandler,editHandler}) => {
    return ( 
        <div className="todo">
            <div onClick={completeHandler} className={`todoText ${showTodos.isCompleted ? "completed" : "" } `}>{showTodos.text}</div>
            <div>
                <button className="btn" onClick={editHandler}>Edit</button>
                <button className="btn remove" onClick={deletHandler}>Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;