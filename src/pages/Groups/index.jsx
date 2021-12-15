import api from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import Search from "antd/lib/transfer/search";

const Groups = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";

  const [groups, setHabits] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

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

  const groupsFiltered = groups.filter((item) =>
    item.name.toLowerCase().includes(filterGroups.toLowerCase())
  );

  return (
    <div>
      <h1>Meus Grupos</h1>
      
        <Search
          value={filterGroups}
          onChange={(e) => setFilterGroups(e.target.value)}
          placeholder="Digite o nome do grupo"
        />

      {groupsFiltered.map((groups) => (
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
