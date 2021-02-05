const List = ({ todos }) => {
    console.log(todos);
    return(
    <ul>
        {todos.map((todo) => {
            return <li>{todo.content}</li>
        })}
    </ul>);
};

export default List;