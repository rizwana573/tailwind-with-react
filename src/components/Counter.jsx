import { useState } from "react";

const Counter = ({name}) => {
  const [count, setCount] = useState(0);

  return (
    <>
    <h2 className="text-bold text-xl my-4">{name}</h2>
    <p className="text-bold">{`Count is: ${count}`}</p>
      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>

      <button
        className="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400"
        onClick={() => setCount(count - 1)}
      >
        Decrease Count
      </button>
    </>
  );
};

export default Counter;