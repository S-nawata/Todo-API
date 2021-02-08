import { useState } from "react";
import { nanoid } from "nanoid";

import Title from "./Title";
import Form from "./Form";
import List from "./List";
//props:親コンポーネントから子のコンポーネントへの値を渡す

//state: reactの状態を表す変数

const App = () => {
    // const [stateの値,stateを変更するための関数]= useState(stateの初期値)
    const [name,setName] = useState("せいき");
    const [todos, setTodos] = useState([
        {
            content: "掃除をする",
            id: nanoid(),
            isDone: false,        
        },
        {
            content: "洗濯をする",
            id: nanoid(),
            isDone: false,
        },
        {
            content: "料理をする",
            id: nanoid(),
            isDone: false,
        },
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                content: text, 
                id: nanoid(), 
                isDone: false
            },
        ])
    };

    //Todoを削除する関数
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    const changeName = () => {
        setName("たろう");
    };
    
    return (
        <>
    <Title username = {name}　/>
    <Form addTodo={addTodo}/>
    <List todos = {todos} deleteTodo = {deleteTodo} />
    <button onClick ={changeName}>名前変更ボタン</button>
    </>);
};

export default App ;
// let name = "せいき";

// const changeName = () => {
//     name = "たろう";
//     console.log(name)
// }