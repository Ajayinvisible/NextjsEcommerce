'use client'

import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter();
    const back = () => {
        router.back();
    };
  return (
    <button
      className="border-2 border-blue-600 py-2 px-7 rounded-2xl cursor-pointer"
      onClick={back}
    >
      Back
    </button>
  );
}

export default BackButton