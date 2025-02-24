export default function AboutHydration() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-400 text-center mt-16 mb-8">
        What Is Hydration?
      </h1>
      <div className="grid bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full">
        <p>
          The hydration determines the texture, crust, flavour and appearance of
          your bread.
        </p>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-gray-700 font-semibold text-left">
                HYDRATION
              </th>
              <th className="border border-gray-300 px-4 py-2 text-gray-700 font-semibold text-left">
                DESCRIPTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">50%-59%</td>
              <td className="border border-gray-300 px-4 py-2">
                Easy to knead, non-sticky dough. Bread will be firmer.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">60%-75%</td>
              <td className="border border-gray-300 px-4 py-2">
                Dough becomes slightly sticky and harder to knead. Bread will be
                softer with a tight crust. Great for a beginner sourdough baker.
                As a beginner work between 65%-70% hydration.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">76%-90%</td>
              <td className="border border-gray-300 px-4 py-2">
                The dough becomes sticky and hard to handle, use a mixer with a
                dough hook for kneading. Bread will be light with a thin crust.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
