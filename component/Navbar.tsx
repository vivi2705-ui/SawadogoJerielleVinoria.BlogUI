"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({
  onArticlesClick,
  onHomeClick,
  cardsData,
  setCards,
  setShowHero,
}: {
  onArticlesClick: () => void;
  onHomeClick: () => void;
  cardsData: any[];
  setCards: (cards: any[]) => void;
  setShowHero: (show: boolean) => void;
}) => {
  const [active, setActive] = useState("home");

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    const query = e.target.value.toLowerCase();

    if (query === "") {
      setCards(cardsData);
      setShowHero(true);
      return;
    }

    const filtered = cardsData.filter((article: any) =>
      article.title.toLowerCase().includes(query)
    );
    setCards(filtered);
    setShowHero(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <a className="btn btn-ghost flex items-center gap-2">
  <div className="bg-primary text-primary-content rounded-lg w-8 h-8 flex items-center justify-center text-lg">
    ⛩️
  </div>
  <span className="font-bold text-xl">
    <span className="text-primary">Otaku</span>Zone
  </span>
</a>
      </div>
      <div className="flex-none gap-2">
 <input
  type="text"
  placeholder="Rechercher un article..."
  className="input input-bordered input-sm w-24 md:w-auto transition-all duration-300 focus:border-pink-500 focus:outline-pink-500"
  onChange={handleSearch}
/>
        <button
  className={`btn btn-sm ${active === "home" ? "btn-primary" : "btn-ghost"}`}
  onClick={() => {
    setActive("home");
    onHomeClick();
  }}
>
  Home
</button>
        <button
          className={`btn btn-sm ${active === "articles" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => {
            setActive("articles");
            onArticlesClick();
          }}
        >
       
          Articles
        </button>

           <Link href="/about" className="btn btn-sm btn-ghost">
           About
          </Link>

        <label htmlFor="my-drawer-5" className="btn btn-primary btn-sm">
          ☰
        </label>
      </div>
    </div>
  );
};

export default Navbar;