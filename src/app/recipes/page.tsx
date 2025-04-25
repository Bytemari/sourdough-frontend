import RecipeCard from "@/components/recipe-card";
import SearchBar from "@/components/search-bar";

export default function Recipes() {
  return (
    <div className="px-10">
      <SearchBar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-600 text-center my-5">
          Recipes
        </h1>
      </div>
      <RecipeCard />
    </div>
  );
}
