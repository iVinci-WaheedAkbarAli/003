import React from "react";
import { useState } from "react";
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import { Card } from "@chakra-ui/react";

type Todo = {
  id: number;
  content: string;
};
const Todo = () => {
  // todoList
  const [todos, setTodos] = useState<Todo[]>([]);
  // inputに入力した内容
  const [enteredTodo, setEnteredTodo] = useState("");
  // todoList更新
  const createTodo = (todo: Todo) => {
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
};

export default Todo;
