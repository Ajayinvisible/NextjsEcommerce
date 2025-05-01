function NewsLayout({ children }) {
  return (
    <div> { children}
      <div className="bg-slate-400 py-3 ">Related News</div>
    </div>
  );
}

export default NewsLayout;
