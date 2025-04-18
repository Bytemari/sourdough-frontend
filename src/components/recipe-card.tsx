"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecipeCard() {
  const recipes = [
    {
      id: "blueberry-sourdough",
      title: "Best Blueberry Sourdough Bread",
      image: "/images/blueberry-sourdough-bread.jpg",
    },
    {
      id: "pancakes",
      title: "Sourdough Pancakes",
      image: "/images/pancakes.jpg",
    },
    {
      id: "pizza",
      title: "Sourdough Pizza Dough",
      image: "/images/pizza.jpg",
    },
    {
      id: "jalapeno-cheddar",
      title: "Jalapeno Cheddar Bread",
      image: "/images/jalapeno-cheddar.jpg",
    },
    {
      id: "simple-bread",
      title: "Simple Sourdough Bread",
      image: "/images/sourdough-bread.jpg",
    },
    {
      id: "bagels",
      title: "Sourdough Bagels",
      image: "/images/sourdough-bagels.jpg",
    },
    {
      id: "focaccia",
      title: "Sourdough Focaccia",
      image: "/images/focaccia.jpg",
    },
    {
      id: "cinnamon-roll",
      title: "Sourdough Cinnamon Rolls",
      image: "/images/cinnamon-roll.jpg",
    },
    {
      id: "cinnamon-toast-discard",
      title: "Cinnamon Toast Crunch",
      image: "/images/cinnamon-toast.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
            <div className="relative w-full h-64">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
