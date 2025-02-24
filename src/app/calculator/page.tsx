import AboutHydration from "@/components/hydration";
import HydrationCalculator from "@/components/hydration-calculator";

export default function Calculator() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-yellow-600 text-center my-10">
        Simple Sourdough Calculator
      </h1>

      <HydrationCalculator />
      <AboutHydration />
    </div>
  );
}
