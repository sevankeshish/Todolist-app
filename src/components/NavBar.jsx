import Select from "react-select";

const options = [
    {value:"All", label:"All"},
    {value:"Completed", label:"Completed"},
    {value:"Uncompleted", label:"Uncompleted"},
]

const NavBar = ({unCompletedTodos,onChange,selectedOption}) => {

    if(!unCompletedTodos) return <h2>set your today's todos !</h2>;

    return (  
        <header >
            <span>{unCompletedTodos} </span><h2>are not completed</h2>
            <Select onChange={onChange} value={selectedOption.value} options={options} className="select"/>
        </header>
    );
}
 
export default NavBar;