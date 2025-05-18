"use client";

import { useSelector } from "react-redux";

function MainLayouts({ children }) {
  const { theme } = useSelector((state) => state.userPreference);
  return <div className={theme}>{children}</div>;
}

export default MainLayouts;
