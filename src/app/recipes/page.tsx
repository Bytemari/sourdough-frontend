import RecipeCard from "@/components/recipe-card";
import SearchBar from "@/components/search-bar";

export default function Recipes() {
  return (
    <div className="px-10">
      <SearchBar />
      <div className="text-center">
        <h1>Recipes</h1>
        <p>Recipes Using Your starter.</p>
      </div>
      <RecipeCard />
    </div>
  );
}
