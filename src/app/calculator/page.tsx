import AboutHydration from "@/components/hydration";
import HydrationCalculator from "@/components/hydration-calculator";
import Image from "next/image";

export default function Calculator() {
  return (
    <div>
      <div className="mt-5">
        <Image
          className="mx-auto"
          src="/images/sourdough-img3.webp"
          width={200}
          height={144}
          alt="sourdough bread image"
        />
      </div>
      <h1 className="text-4xl font-normal text-center">
        Simple Sourdough Calculator
      </h1>
      <div>
        <p className="text-center mt-2">No more mental math in the kitchen!</p>
      </div>
      <HydrationCalculator />
      <AboutHydration />
    </div>
  );
}
