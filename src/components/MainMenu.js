"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function MainMenu({ navLink }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathName = usePathname();
  const isActive =
    pathName == navLink.route ||
    (navLink.route !== "/" && pathName.startsWith(navLink.route));

  return (
    <li
      onMouseEnter={() => {
        if (navLink.subMenu?.length > 0) {
          setShowDropdown(!showDropdown);
        }
      }}
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
    >
      <Link
        href={navLink.route}
        className={` ${
          isActive
            ? "text-blue-700 dark:text-blue-500"
            : "text-gray-900 dark:text-white"
        }
        block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
        aria-current="page"
      >
        {navLink.label}
      </Link>
      {navLink.subMenu?.length > 0 ? (
        <div
          id="dropdownNavbar"
          className={`${
            showDropdown ? "block" : "hidden"
          } absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton"
          >
            {navLink.subMenu.map((subMenu, subIndex) => (
              <li key={subIndex}>
                <Link
                  href={`${navLink.route}${subMenu.route}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {subMenu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export default MainMenu;
