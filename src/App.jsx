// import React, { useEffect, useState } from "react";
// import { ColorfulMessage } from "./components/ColorfulMessage";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [faceShowFlag, setFaceShowFlag] = useState(false);
//   const onClickCountUp = () => {
//     setNum(num + 1);
//   };
//   const onClickSwitchShowFlag = () => {
//     setFaceShowFlag(!faceShowFlag);
//   };
//   useEffect(() => {
//     if (num > 0) {
//       if (num % 3 === 0) {
//         faceShowFlag || setFaceShowFlag(true);
//       } else {
//         faceShowFlag && setFaceShowFlag(false);
//       }
//     }
//   }, [num]);

//   return (
//     <>
//       <ColorfulMessage color="blue">おげんきですか</ColorfulMessage>
//       <ColorfulMessage color="pink">おげんきです</ColorfulMessage>
//       <button onClick={onClickCountUp}>カウントアップ</button>
//       <button onClick={onClickSwitchShowFlag}>on/off</button>
//       <p>{num}</p>
//       {faceShowFlag && <p>＼(^o^)／</p>}
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: "red" }}>5個まで</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
