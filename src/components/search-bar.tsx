export default function SearchBar() {
  return (
    <div className="flex justify-end my-6 mr-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200"
        />
        <svg
          className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.65-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
