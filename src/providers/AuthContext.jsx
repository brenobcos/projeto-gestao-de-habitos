import { createContext, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@ClubeDaCorrida:token")) || ""
  );

  const signIn = async (data) => {
    console.log(data);
    await api.post("/sessions/", data).then((response) => {
      console.log(response);
      localStorage.setItem(
        "@ClubeDaCorrida:token",
        JSON.stringify(response.data.access)
      );
    });

    setToken({ token });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
