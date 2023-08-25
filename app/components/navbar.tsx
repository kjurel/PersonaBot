"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { $usrtts } from "./stats";

const Navbar = () => {
  const trait_lnk = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    $usrtts.subscribe((value) => {
      if (value) {
        trait_lnk.current!.innerHTML = value;
        trait_lnk.current!.href = "#";
      }
    });
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-black to-grey-800 font-mono">
      <nav className="flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-white hover:text-blue-500">
          <div className="text-white text-xl font-bold select-none">
            PersonaBot<span className="text-2xl">🔬</span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/abstract" className="text-white hover:text-blue-500">
              Abstract
            </Link>
          </li>
          <li>
            <Link
              ref={trait_lnk}
              href="/temp_traits"
              className="text-white hover:text-blue-500"
            >
              Traits
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
