function ProductLayout({ children }) {
  return (
    <div>
      {children}
      <div className="bg-slate-400 py-3">Related Products</div>
    </div>
  );
}

export default ProductLayout;
