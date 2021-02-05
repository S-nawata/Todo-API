import { useState } from "react";


//Inputの内容をreactで管理する
//送信ボタンが押されたらinputの中身をtodosに追加する
//form送信時の再読み込みをキャンセルする


const Form = () => {
    const [text ,setText] = useState("");
    console.log(text)
    return (
    <form>
        <input value={text} 　onChange={(e) => setText(e.target.value)}　/>
        <button>送信</button>
    </form>
    );
};

export default Form ;
