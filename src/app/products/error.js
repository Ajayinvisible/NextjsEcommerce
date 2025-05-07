'use client'

import BackButton from "./_components/BackButton";

function ProductsError() {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-xl text-red-300">{error.message}</h1>
      <BackButton />
    </div>
  );
}

export default ProductsError;