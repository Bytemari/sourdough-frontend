"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HydrationCalculator() {
  const [flour, setFlour] = useState(0);
  const [water, setWater] = useState(0);
  const [starter, setStarter] = useState(0);

  useEffect(() => {
    const savedFlour = localStorage.getItem("flour");
    const savedWater = localStorage.getItem("water");
    const savedStarter = localStorage.getItem("starter");

    if (savedFlour) setFlour(Number(savedFlour));
    if (savedWater) setWater(Number(savedWater));
    if (savedStarter) setStarter(Number(savedStarter));
  }, []);

  useEffect(() => {
    localStorage.setItem("flour", flour.toString());
    localStorage.setItem("water", water.toString());
    localStorage.setItem("starter", starter.toString());
  }, [flour, water, starter]);

  const starterFlour = Math.ceil(starter * 0.5);
  const starterWater = Math.ceil(starter * 0.5);

  const totalFlour = Math.ceil(flour + starterFlour);
  const totalWater = Math.ceil(water + starterWater);

  const hydration =
    totalFlour > 0 ? Math.ceil((totalWater / totalFlour) * 100) : 0;

  const salt = Math.ceil(totalFlour * 0.02);

  const clearInputs = () => {
    setFlour(0);
    setWater(0);
    setStarter(0);
    localStorage.removeItem("flour");
    localStorage.removeItem("water");
    localStorage.removeItem("starter");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full">
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Flour (g)</label>
            <input
              type="number"
              value={flour === 0 ? "" : flour}
              onChange={(e) => setFlour(Number(e.target.value) || 0)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Water (g)</label>
            <input
              type="number"
              value={water === 0 ? "" : water}
              onChange={(e) => setWater(Number(e.target.value) || 0)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Starter (g)</label>
            <input
              type="number"
              value={starter === 0 ? "" : starter}
              onChange={(e) => setStarter(Number(e.target.value) || 0)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            onClick={clearInputs}
            className="w-full bg-amber-300 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-col h-full justify-between">
          <h2 className="text-xl font-semibold mb-2">Totals</h2>
          <div className="flex-grow">
            <p className="text-2xl mb-2">
              <strong>Hydration:</strong>{" "}
              <span className="text-blue-500 font-semibold">{hydration}%</span>
            </p>
            <p>
              <strong>Flour:</strong> {totalFlour}g
            </p>
            <p>
              <strong>Water:</strong> {totalWater}g
            </p>
            <p>
              <strong>Starter:</strong> {starter}g
            </p>
            <p>
              <strong>Salt:</strong> {salt}g
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/wheat.jpeg"
              width={200}
              height={150}
              alt="wheat img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
