import React from "react";

type FormProps = {
  addTodo: (e: React.FormEvent) => void;
  enteredTodo: string;
  setEnteredTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Form: React.FC<FormProps> = ({
  addTodo,
  enteredTodo,
  setEnteredTodo,
}) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
