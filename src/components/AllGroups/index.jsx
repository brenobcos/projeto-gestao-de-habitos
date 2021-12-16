import React, { useCallback, useState, useEffect } from "react";
import api from "../../services/api";

const AllGroups = () => {
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  //GROUPS - GET
  const [groups, setGroups] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

  const [next, setNext] = useState(1);

  const previewPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  const nextPage = () => {
    if (next < 20) {
      setNext(next + 1);
    }
  };

  const groupsFiltered = groups.filter((item) =>
    item.name.toLowerCase().includes(filterGroups.toLowerCase())
  );

  useEffect(() => {
    api
      .get(`/groups/?page=${next}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data.results))
      .then((response) => setGroups(response.data.results))
      .catch((err) => console.log(err));
  }, [next]);

  return (
    <div>
      <button onClick={() => previewPage()}>Previews</button>
      <button onClick={() => nextPage()}>Next</button>
    </div>
  );
};

export default AllGroups;
