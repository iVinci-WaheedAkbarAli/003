import React from "react";
import { CardBody, Input } from "@chakra-ui/react";

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
    <CardBody>
      <form onSubmit={addTodo}>
        <Input
          borderColor="black"
          placeholder="タスク名"
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>
    </CardBody>
  );
};

export default Form;
