"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import logo from "../assets/images/logo.svg";

const Nav = () => {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  let isUserLoggedIn = true;

  useEffect(() => {
    const getAndSetProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    getAndSetProviders();
  }, []);

  return (
    <nav className={"flex-between w-full mb-16 px-16 pt-3"}>
      <Link href={"/"} className={"flex gap-2 flex-center"}>
        <Image
          src={logo}
          alt={""}
          width={30}
          height={30}
          className={"cursor-pointer object-contain"}
        />
      </Link>
      <div className={"sm:flex hidden"}>
        {isUserLoggedIn ? (
          <div className={"flex gap-3 md:flex-5"}>
            <Link href={"/create-note"} className={"black_btn"}>
              Create Note
            </Link>
            <button
              type={"button"}
              onClick={() => signOut()}
              className={"outline_btn"}
            >
              Logout
            </button>
            <Link href={"/profile"} className={"black_btn"}>
              <Image src={logo} alt={""} width={32} height={32} />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type={"button"}
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className={"button_primary"}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/*mobile nav*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div>
            <Image
              src={logo}
              alt={""}
              width={35}
              height={30}
              className={"cursor-pointer object-contain"}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className={"dropdown_link"}
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href={"/create-note"}
                  className={"dropdown_link"}
                  onClick={() => setShowDropdown(false)}
                >
                  Create Note
                </Link>
                <button
                  type={"button"}
                  onClick={() => {
                    setShowDropdown(false);
                    signOut();
                  }}
                  className={"mt-5 black_btn w-full"}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type={"button"}
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className={"button_primary"}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
