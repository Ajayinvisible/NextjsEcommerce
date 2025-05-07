'use client'

import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter();
    const back = () => {
        router.back();
    };
  return (
    <button
      className="border-2 border-blue-600 py-1 px-5 rounded-xl cursor-pointer"
      onClick={back}
    >
      Back
    </button>
  );
}

export default BackButton