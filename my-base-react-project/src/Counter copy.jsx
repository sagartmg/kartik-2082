import { Fragment, useState } from "react";

const Counter = () => {
  let count = 100;

  const increment = () => {
    count++;
    console.log("incrmeented.....", count);
  };
  const decrement = () => {
    count--;
    console.log("decrement.....", count);
  };

  console.log("counter render");
  return (
    <>
      <p className="mb-8 text-2xl">Counter:{count}</p>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer "
        >
          add
        </button>
        <button
          onClick={decrement}
          className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
        >
          minus
        </button>
      </div>
    </>
  );
};

export default Counter;
