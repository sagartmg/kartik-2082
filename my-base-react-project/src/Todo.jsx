import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState(["toto-1", "todo-2"]);

  const addNewItem = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);

    setTodos([e.target.title.value])
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={addNewItem}>
        <input type="checkbox" className="text-4xl h-12 w-12" name="title" />
        <input className="border py-4 px-8" placeholder="title" name="title" />
        <button className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer">
          submit
        </button>
      </form>
      <br />
      <br />
      <ul className="list-decimal">
        {todos.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
};
