"use client";
import { useState } from "react";

function AuthTemplate({ children }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="pb-5">
        <input type="text" className="border-2 border-white" />
      </div>
      <p>Count : {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-blue-600 py-2 px-7 rounded-2xl cursor-pointer"
      >
        Increase
      </button>
      {children}
    </>
  );
}

export default AuthTemplate;
