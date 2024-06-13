import { useState } from "react";

// increase decrease deer darhaar toogoo ihesgene bagasgana
const Test = () => {
  const [num, setNum] = useState(0);
  function increment() {
    setNum(num + 1);
  }
  function decrement() {
    setNum(num - 1);
  }
  return (
    <div className="flex gap-7 m-10">
      <button
        className="bg-gray-400 w-10 cursor-pointer rounded"
        onClick={increment}
      >
        +
      </button>
      <p>{num}</p>
      <button
        className="bg-gray-400 w-10 cursor-pointer rounded"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};
export default Test;
