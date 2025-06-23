"use client";
import { logoutUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import profile from "../assets/images/user.png";
import { allowedAdminRoles } from "@/helpers/auth";
import { DASHBOARD_ROUTE } from "@/constants/routes";

function AuthUser({ user }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const isAllowed = allowedAdminRoles(user?.roles);
  return (
    <>
      <div className="relative h-[40px]">
        <button onClick={() => setShowPopup(!showPopup)}>
          <Image
            src={profile}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full w-[40px] h-[40] object-cover border-2 border-foreground shadow"
          />
        </button>
        {showPopup && (
          <div className="absolute top-12 right-0 w-auto p-3 rounded border shadow bg-background dark:bg-gray-900 dark:text-dark-foreground whitespace-nowrap">
            <h4 className="font-semibold text-foreground dark:text-dark-foreground mr-3">
              Hi! {user.name}
            </h4>
            {isAllowed && (
              <Link
                onClick={() => setShowPopup(!showPopup)}
                href={DASHBOARD_ROUTE}
                className="my-2 w-full flex justify-between items-center bg-blue-800 hover:bg-blue-900 text-background border-2 border-blue-800 dark:bg-blue-800 p-1 rounded cursor-pointer dark:hover:opacity-80"
              >
                Dashboard
              </Link>
            )}
            <Link
              onClick={() => setShowPopup(!showPopup)}
              href="/profile"
              className="my-2 w-full flex justify-between items-center bg-gray-700 hover:bg-gray-800 text-background border-2 border-gray-700 dark:bg-gray-700 p-1 rounded cursor-pointer dark:hover:opacity-80"
            >
              Profile
            </Link>
            <hr />
            <button
              onClick={() => dispatch(logoutUser())}
              className="mt-2 w-full flex justify-between items-center bg-background hover:bg-foreground hover:text-background text-foreground border-2 border-foreground dark:text-dark-foreground dark:bg-dark-background p-1 rounded cursor-pointer dark:hover:opacity-80"
            >
              <span>Logout</span>
              <IoLogOut />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AuthUser;
