"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar2 = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <Image width={50} height={50} src="/card3.jpg" alt="avatar" className="rounded-lg" />
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost flex items-center gap-2">
          <div className="bg-primary text-primary-content rounded-lg w-8 h-8 flex items-center justify-center text-lg">
            ⛩️
          </div>
          <span className="font-bold text-xl">
            <span className="text-primary">Otaku</span>Zone
          </span>
        </a>
      </div>

      <div className="navbar-end gap-2">
        <Link
          href="/Accueil"
          className={`btn btn-sm ${pathname === "/Accueil" ? "btn-primary" : "btn-ghost"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`btn btn-sm ${pathname === "/about" ? "btn-primary" : "btn-ghost"}`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
