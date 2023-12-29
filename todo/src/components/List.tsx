import React from "react";

type ListProps = {
  todos: { id: number; content: string }[];
  deleteTodo: (id: number) => void;
};

const List: React.FC<ListProps> = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo: { id: number; content: string }) => {
        return (
          <div key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
