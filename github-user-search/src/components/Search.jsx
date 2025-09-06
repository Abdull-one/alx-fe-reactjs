import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setResults(data.items || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <form onSubmit={handleSearch} className="grid gap-4 sm:grid-cols-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results && results.length > 0 && (
          results.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded-xl shadow-sm bg-gray-50 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline text-sm"
                >
                  View Profile
                </a>
              </div>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
            </div>
          ))
        )}

        {results && results.length === 0 && (
          <p className="text-gray-600 text-center">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
