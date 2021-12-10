import { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

const useProfile = () => {
  const context = useContext(ProfileContext);

  return context;
};

const ProfileProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <ProfileContext.Provider value={{ userName, setUserName }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider, useProfile };
