import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {userData && (
          <div className="mt-4 text-center">
            <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-bold mt-2">{userData.name || userData.login}</h2>
            <a href={userData.html_url} target="_blank" className="text-blue-500 underline">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
