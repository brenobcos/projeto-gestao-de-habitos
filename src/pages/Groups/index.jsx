import api from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import Search from "antd/lib/transfer/search";

const Groups = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  const [groups, setHabits] = useState([]);

  const getGroups = useCallback(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data.results))
      .catch((err) => console.log(err));
  }, [setHabits, token]);

  useEffect(() => {
    if (groups.length === 0) {
      getGroups();
    }
  }, [groups.length, getGroups]);

  return (
    <div>
      <h1>Meus Grupos</h1>
        <form>
            <Search />
            <button>Procurar</button>
        </form>

      {groups.map((groups) => (
        <div key={groups.id}>
          <h2>Grupo:{groups.name}</h2>
          <h3>Descrição: {groups.description}</h3>
          <h4>Categoria: {groups.category}</h4>
        </div>
      ))}
    </div>
  );
};

export default Groups;
