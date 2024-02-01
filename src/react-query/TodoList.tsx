import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, isError, isLoading } = useTodos();

  return (
    <>
      {isError && <p>Error fetching data.</p>}
      {isLoading && <p>Loading</p>}

      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
