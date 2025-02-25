"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const recipes = {
  "blueberry-sourdough": {
    title: "Best Blueberry Sourdough Bread",
    image: "/images/blueberry-sourdough-bread.jpg",
    description:
      "This delicious blueberry sourdough bread features a crispy crust and soft interior with bursts of fresh blueberries, perfect for breakfast or a snack.",
    ingredients: [
      "500g bread flour",
      "350g water",
      "100g sourdough starter",
      "10g salt",
      "100g fresh blueberries",
    ],
    steps: [
      "Mix the flour and water until just combined.",
      "Add the sourdough starter and salt, and mix until incorporated.",
      "Gently fold in the blueberries.",
      "Let the dough rest for 30 minutes (autolyse).",
      "Perform a series of stretch and folds over 4-6 hours of bulk fermentation.",
      "Shape the dough and let it proof in a banneton.",
      "Bake in a preheated oven at 250°C for 30 minutes.",
    ],
  },
};

export default function RecipeDetailPage() {
  const params = useParams();
  const { id } = params;
  const recipe = recipes[id as keyof typeof recipes];

  if (!recipe) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <p className="text-center text-gray-500">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      <div className="relative w-full h-96 mb-6">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
