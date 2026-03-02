"use client";

import React from "react";

const SideBar = ({ cardsData, setCards, setShowHero }: any) => {
  const handleFilter = (filter: string) => {
    const filtered = cardsData.filter(
      (article: any) =>
        article.category === filter ||
        (article.tags && article.tags.includes(filter))
    );
    setCards(filtered);
    setShowHero(false);
  };

  const showAll = () => {
    setCards(cardsData);
    setShowHero(true);
  };

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 w-64 min-h-full p-4">
        <li className="menu-title">Accueil</li>
        <li>
          <a onClick={showAll}>Home</a>
        </li>
        <li>
          <a onClick={() => handleFilter("top 10")}>Articles populaires</a>
        </li>
        <li className="menu-title">Mangas</li>
        <li>
          <a onClick={() => handleFilter("shonen")}>Shonen</a>
        </li>
        <li>
          <a onClick={() => handleFilter("shojo")}>Shojo</a>
        </li>
        <li>
          <a onClick={() => handleFilter("seinen")}>Seinen</a>
        </li>
        <li className="menu-title">Animés</li>
        <li>
          <a onClick={() => handleFilter("nouveauté")}>Nouveautés</a>
        </li>
        <li>
          <a onClick={() => handleFilter("top 10")}>Top 10</a>
        </li>
        <li className="menu-title">Culture Otaku</li>
        <li>
          <a onClick={() => handleFilter("cosplay")}>Cosplay</a>
        </li>
        <li>
          <a onClick={() => handleFilter("figurines")}>Figurines</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
