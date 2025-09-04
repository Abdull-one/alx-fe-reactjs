import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth?.loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
