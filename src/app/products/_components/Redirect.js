"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function Redirect() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (count >= 2) {
      router.push("/cart");
    }
  });
  return (
    <>
      <div className="text-2xl font-bold">
        Product Count : <span className="text-blue-500">{count}</span>
      </div>
      <button
        className="border-2 border-blue-600 py-2 px-7 rounded-2xl cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Add Product
      </button>
    </>
  );
}

export default Redirect;
