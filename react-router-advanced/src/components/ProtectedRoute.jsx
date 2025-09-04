import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate login (replace later with real auth)
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
