function AdminPage({ children }) {
  return (
    <div className="col-span-10  ">
      <div className="card mx-4 my-10 shadow p-5 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default AdminPage;
