import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import { useState, useEffect } from "react";

/* 
  life-cycle of react components
    - componentDidMount
    - componentDidUpdate
    - componentDidUnmount
*/

import Button from "./components/Button";

export const TodosApi = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = () => {
    setIsLoading(true);
    // fetch("https://jsonplaceholder.tpicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch(err=>{
    //     console.log("something went wrong");
    //   })

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("something went wrong");
        setIsLoading(false);
        toast.error("Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    fetchTodos()
  }, []);

  /*  useEffect(()=>{
    fetchTodos()
  },<dependency-arra>)
 */

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Button
        isDisabled={isLoading}
        title="fetch todos"
        onClickFn={fetchTodos}
      />
      <br />
      <br />
      <br />
      <br />

      {isLoading ? (
        <p>is Loading.. please wait</p>
      ) : (
        <ul className="list-disc">
          {todos.map((el) => {
            return <li key={el.id}>{el.title}</li>;
          })}
        </ul>
      )}
    </>
  );
};
