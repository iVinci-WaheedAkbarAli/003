import React from "react";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";
import { Card } from "@chakra-ui/react";

function App() {
  // todoList
  const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);
  // inputに入力した内容
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  // todoList更新
  const createTodo = (todo: { id: number; content: string }) => {
    setTodos([...todos, todo]);
  };
  // todo削除
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);
    // 追加が終わったら初期化
    setEnteredTodo("");
  };

  return (
    <>
      <Card
        boxShadow="lg"
        p={20}
        rounded="lg"
        bg="white"
        margin="0 auto"
        width="50%"
      >
        <Header />
        <Form
          addTodo={addTodo}
          enteredTodo={enteredTodo}
          setEnteredTodo={setEnteredTodo}
        />
        <List todos={todos} deleteTodo={deleteTodo} />
      </Card>
    </>
  );
}

export default App;
