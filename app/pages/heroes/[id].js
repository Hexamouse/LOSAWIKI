"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const HeroDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Ambil id dari URL
  const [hero, setHero] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchHeroDetail = async () => {
        const response = await fetch(`/api/heroes/${id}`); // Sesuaikan endpoint API
        if (response.ok) {
          const data = await response.json();
          setHero(data);
        } else {
          console.error("Hero not found");
        }
      };

      fetchHeroDetail();
    }
  }, [id]);

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#353535] min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="w-[85%] mx-auto flex-grow mb-8">
        <h1 className="text-white text-3xl mb-4">{hero.name}</h1>
        <p className="text-gray-300 mb-4">{hero.description}</p>
        <div className="mt-4">
          <Image
            src={hero.imageUrl} // Pastikan ini benar
            alt={hero.name}
            width={500}
            height={300}
            className="rounded-md"
            layout="responsive"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroDetail;
