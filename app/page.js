"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "./components/HeroCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeams from "./components/OurTeams";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("/api/heroes");
      const data = await response.json();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  const handleViewClick = (id) => {
    router.push(`/heroes/${id}`);
  };

  const genres = [...new Set(heroes.map((hero) => hero.type))];

  const filteredHeroes = heroes.filter((hero) => {
    const matchesSearchTerm =
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.id.toString().includes(searchTerm);

    const matchesCategory = selectedCategory
      ? hero.type === selectedCategory
      : true;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="bg-[#353535] min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main content */}
      <div className={`w-[85%] mx-auto mb-8 flex-grow transition-all duration-200 ${isMenuOpen ? "mt-32" : "mt-0"}`}>
        
        {/* Category Dropdown */}
        <div className="flex items-center space-x-4 mb-4">
          <select
            className="bg-[#444444] text-[#ffffff] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#08A170]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {genres.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Heroes by Name or ID..."
            className="bg-[#444444] text-[#ffffff] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#08A170]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} onViewClick={handleViewClick} />
          ))}
        </div>

        {/* Our Teams Section */}
        <OurTeams />
      </div>

      <Footer />
    </div>
  );
}
