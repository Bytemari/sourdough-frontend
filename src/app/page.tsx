"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-6 py-2 text-center">
      <h1 className="text-4xl font-bold text-yellow-600">
        Welcome to Everything Sourdough!
      </h1>
      <Image
        className="mx-3"
        src={"/images/sourdough.png"}
        alt={"bread img"}
        width={120}
        height={120}
      />
      <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
        Have you ever wanted to bake your own{" "}
        <strong className="text-red-400">sourdough bread </strong>
        from scratch? You&apos;re in the right place! This website is your
        <strong className="text-yellow-500"> ultimate guide</strong> to all
        things sourdough—whether you&apos;re a{" "}
        <strong className="text-green-600">beginner</strong> or an experienced
        baker.
      </p>

      <p className="max-w-2xl text-lg text-gray-700 leading-relaxed mt-4">
        Learn how to create and{" "}
        <strong className="text-lime-600">maintain your starter</strong>,
        explore a variety of{" "}
        <strong className="text-teal-600">sourdough recipes</strong> (including{" "}
        <strong className="text-sky-600">discard recipes!</strong>), and master
        the art of
        <strong className="text-orange-600"> hydration calculations</strong> to
        get the perfect dough consistency.
      </p>

      <p className="max-w-2xl text-lg text-gray-700 leading-relaxed mt-4">
        Whether you&apos;re aiming for a{" "}
        <strong className="text-blue-600">crispy artisan loaf</strong> or an{" "}
        <strong className="text-purple-600">easy sandwich bread</strong>, we’ve
        got you covered. Start your sourdough journey today!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-20">
        <Link href="/recipes">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
            Explore Sourdough Recipes
          </button>
        </Link>

        <Link href="/starter">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            How to Start with Starter
          </button>
        </Link>

        <Link href="/calculator">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
            Use the Hydration Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}
