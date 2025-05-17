"use client";
import logo from "@/assets/images/logo.png";
import proUser from "@/assets/images/user.png";
import navLinks from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/auth/authSlicer";
import { IoLogOut } from "react-icons/io5";


function Header() {
  // const isAuth = false; // Replace with your authentication logic
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state)
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} className="w-20" alt="Flowbite Logo" priority />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shop Smart
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center">
                <h4 className="font-semibold text-white mr-3">Hi! {user.name}</h4>
                <button onClick={() => dispatch(logoutUser())} className="bg-slate-700 text-white dark:text-slate-700 dark:bg-white p-2 rounded cursor-pointer">
                  <IoLogOut />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((navLink, index) =>
                user || !navLink.isAuth ? (
                  <MainMenu navLink={navLink} key={index} />
                ) : null
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
