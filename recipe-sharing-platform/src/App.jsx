import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import recipes from "./data";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
