"use client";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function MainLayouts({ children }) {
  const { theme } = useSelector((state) => state.userPreference);
  return (
    <div className={theme}>
      {children}
      <ToastContainer />
    </div>
  );
}

export default MainLayouts;
