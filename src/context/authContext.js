import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = () => {
    //
    setCurrentUser({
      id: 1,
      name: "Hoang",
      profilePic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fuser-3296.html&psig=AOvVaw2o4C6unYIA2EZgi8LG6koE&ust=1667747867494000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjjkIurl_sCFQAAAAAdAAAAABAE",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
