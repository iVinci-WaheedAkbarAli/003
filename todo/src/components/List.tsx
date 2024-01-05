import React from "react";
import Todo from "./Todo";

type ListProps = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
};

const List: React.FC<ListProps> = ({ todos, deleteTodo }) => {
  return (
    <div>
      <table>
        {todos.map((todo: Todo) => {
          return (
            <div key={todo.id}>
              <td>
                <span>{todo.content}</span>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>完了</button>
              </td>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default List;
