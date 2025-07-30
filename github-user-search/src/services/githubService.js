import axios from 'axios';

export const fetchUserData = async (username) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};
  const response = await axios.get(`https://api.github.com/users/${username}`, { headers });
  return response.data;
};

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};

  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
    headers,
  });

  return response.data;
};
