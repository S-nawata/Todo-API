import { useState } from "react";

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
            id: "1",
            isDone: false,        
        },
        {
            content: "洗濯をする",
            id: "2",
            isDone: false,
        },
    ]);
    const changeName = () => {
        setName("たろう");
    };
    
    return (
        <>
    <Title username = {name}　/>
    <Form />
    <List todos = {todos} />
    <button onClick ={changeName}>名前変更ボタン</button>
    </>);
};

export default App ;
// let name = "せいき";

// const changeName = () => {
//     name = "たろう";
//     console.log(name)
// }