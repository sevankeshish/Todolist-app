const NavBar = ({unCompletedTodos}) => {
    if(!unCompletedTodos) return <h2>set your today's todos !</h2>;
    return (  
        <header >
            <span>{unCompletedTodos} </span><h2>are not completed</h2>
        </header>
    );
}
 
export default NavBar;