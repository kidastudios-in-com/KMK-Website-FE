import { VERIFY_TOKEN_URL } from "@/pages/api/URLs";
import React, { createContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext({
  isLoggedIn: false,
  children: null,
});

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyTokens = async () => {
      const refreshToken = localStorage.getItem("refresh");

      if (refreshToken) {
        try {
          const response = await fetch(VERIFY_TOKEN_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: refreshToken }),
          });

          if (response.ok) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Error verifying tokens:", error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    verifyTokens();
  }, [localStorage.getItem("access"), localStorage.getItem("refresh")]);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
