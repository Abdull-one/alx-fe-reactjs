import { useState } from "react";

// simple mock auth hook
export function useAuth() {
  const [user] = useState({ loggedIn: true }); 
  return user;
}
