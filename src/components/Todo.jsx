const Todo = ({showTodos,completeHandler}) => {
    return ( 
        <div className="todo">
            <div className={showTodos.isCompleted ? "completed" : ""}>{showTodos.text}</div>
            <div>
                <button>Edit</button>
                <button onClick={completeHandler}>Completed</button>
            </div>
        </div>
     );
}
 
export default Todo;