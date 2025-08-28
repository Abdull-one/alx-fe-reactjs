import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change to true to simulate login
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
