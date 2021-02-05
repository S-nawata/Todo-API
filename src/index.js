import ReactDOM from "react-dom";

import App from "./App";
//import 外部ファイルから何かを読み込む
// export　外部ファイルへ何かを送る

//renderメソッド
//第一引数にJSX要素
//第二引数にHTML要素の取得

//JSXとHTMLの違い
//class => className
// for =>htmlFor 
//jsの式を{}の中に書くことができる
// {}の中には文字列、数字、真偽値、undefind、null、配列
// {}の中にオブジェクトは書けない
// JSXは一つの要素しか返せない

ReactDOM.render(<App />, document.getElementById("root"));
