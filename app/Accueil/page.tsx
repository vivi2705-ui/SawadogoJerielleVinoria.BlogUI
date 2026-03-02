"use client";

import { useState, useEffect } from "react";
import ArticleCard from "@/component/ArticleCard";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import SideBar from "@/component/SideBar";

const CATEGORY_LABELS: Record<string, string> = {
  "nouveauté": " Nouveautés",
  "shonen": " Shonen",
  "shojo": " Shojo",
  "seinen": " Seinen",
  "cosplay": " Cosplay",
  "figurines": " Figurines",
  "top 10": " Top 10",
};

const Page = () => {
  const [cards, setCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [showHero, setShowHero] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch("/data/cardsData.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setCardsData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const showAllArticles = () => {
    setCards(cardsData);
    setShowHero(false);
    setIsFiltered(false);
  };

  const goHome = () => {
    setCards(cardsData);
    setShowHero(true);
    setIsFiltered(false);
  };

  // Group cards by category
  const grouped = cards.reduce((acc: Record<string, any[]>, article: any) => {
    if (!acc[article.category]) acc[article.category] = [];
    acc[article.category].push(article);
    return acc;
  }, {});

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <SideBar
        cardsData={cardsData}
        setCards={(filtered: any[]) => {
          setCards(filtered);
          setIsFiltered(filtered.length !== cardsData.length);
        }}
        setShowHero={setShowHero}
      />
      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar
          onArticlesClick={showAllArticles}
          onHomeClick={goHome}
          cardsData={cardsData}
          setCards={(filtered: any[]) => {
            setCards(filtered);
            setIsFiltered(filtered.length !== cardsData.length);
          }}
          setShowHero={setShowHero}
        />

        {showHero && <Hero />}

        <section className="bg-base-100 py-10 flex-1">
          {isFiltered ? (
            // Flat grid when filtering or searching
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-6">
              {cards.map((article: any) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          ) : (
            // Grouped rows when browsing normally
            <div className="flex flex-col gap-10 max-w-7xl mx-auto px-6">
              {Object.entries(grouped).map(([category, articles]) => (
                <div key={category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-black uppercase tracking-widest text-primary">
                      {CATEGORY_LABELS[category] || category}
                    </h2>
                    <div className="flex-1 h-px bg-primary/20"></div>
                    <span className="text-xs text-base-content/40">
                      {(articles as any[]).length} articles
                    </span>
                  </div>

                  {/* Horizontal Scroll Row */}
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {(articles as any[]).map((article: any) => (
                      <div key={article.id} className="min-w-[260px] max-w-[260px]">
                        <ArticleCard {...article} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Page;
