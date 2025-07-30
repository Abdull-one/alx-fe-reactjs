import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 sm:px-6 md:px-8 py-6">
      <h1 className="text-green-500 text-xl sm:text-2xl font-bold text-center">
        Welcome to GitHub User Services Platform!
      </h1>
      <h2 className="text-center text-2xl sm:text-3xl font-bold mt-6">
        GitHub User Search
      </h2>
      <div className="max-w-3xl mx-auto mt-6">
        <Search />
      </div>
    </div>
  );
}

export default App;
