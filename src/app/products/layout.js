import BackButton from "./_components/BackButton";

function ProductsLayout({ children }) {
  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-semibold">Products Page</h1>
        <BackButton />
      </div>
      {children}
    </div>
  );
}

export default ProductsLayout;
