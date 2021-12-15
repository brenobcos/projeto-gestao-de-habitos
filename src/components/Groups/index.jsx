import React, { useCallback, useState, useEffect } from "react";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
import Search from "antd/lib/transfer/search";

const Groups = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const userGroup = decoded.user_id;

  //GRUPOS - POST
  const schemaGroup = yup.object().shape({
    name: yup.string().required("Nome Obrigatório."),
    description: yup.string().required("Descrição sobre o grupo obrigatória."),
    category: yup.string().required("Categoria do Grupo obrigatória."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaGroup) });

  const createGroup = ({ name, description, category }) => {
    const newGroup = {
      name,
      description,
      category,
    };
    api
      .post("/groups/", newGroup, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        getGroups();
      })
      .catch((err) => console.log(err));
  };

  //GROUPS - GET
  const [groups, SetGroups] = useState([]);
  const [filterGroups, setFilterGroups] = useState("");

  const getGroups = useCallback(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => SetGroups(response.data.results))
      .catch((err) => console.log(err));
  }, [SetGroups, token]);

  useEffect(() => {
    if (groups.length === 0) {
      getGroups();
    }
  }, [groups.length, getGroups]);

  const groupsFiltered = groups.filter((item) =>
    item.name.toLowerCase().includes(filterGroups.toLowerCase())
  );

  //DELETE
  const removeGroup = (id) => {
    api
      .delete(`/groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getGroups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //INSCRIÇÃO
  const subsUser = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  //DESINSCREVER
  // const unsubsUser = (id) => {
  //   api
  //     .delete(`/groups/${id}/unsubscribe/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //BUSCAR INSCRIÇÃO
  // const [myGroups, setMyGroups] = useState([]);

  // const getUserGroups = useCallback(() => {
  //   api
  //     .get("/groups/subscriptions/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => setMyGroups(response.data))
  //     .catch((err) => console.log(err));
  // }, [token]);

  //Filters Search
  const [listGroup, setListGroup] = useState([]);
  const searchGroup = (name) => {
    api
      .get(`/groups/${name}`)
      .then((response) => setListGroup(response.data))
      .catch(
        (err) => {
          console.log(err);
        },
        [setListGroup]
      );
    return (
      <div>
        {listGroup.map((group) => (
          <div key={group.id}>
            <div>{group.name}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1>Meus Grupos</h1>
        {/* Buscar um grupo - filtrar os 5 primeiros para não quebrar a página*/}
        <Search
          value={filterGroups}
          onChange={(e) => setFilterGroups(e.target.value)}
          placeholder="Digite o nome do grupo"
        />
        {/* Filtrando um grupo especifico */}
        {groupsFiltered.map((groups) => (
          <div key={groups.id}>
            <h2>Grupo:{groups.name}</h2>
            <h3>Descrição: {groups.description}</h3>
            <h4>Categoria: {groups.category}</h4>
            <button onClick={() => subsUser(groups.id)}>Se inscrever</button>
          </div>
        ))}
      </div>

      {/* Criação de um grupo */}
      <div>
        <h3>Criação de Grupo</h3>
        <form onSubmit={handleSubmit(createGroup)}>
          <input placeholder="Nome do Grupo" {...register("name")} />
          {errors.name?.message}
          <input
            placeholder="Descrição do Grupo"
            {...register("description")}
          />
          {errors.description?.message}
          <input placeholder="Categoria" {...register("category")} />
          {errors.category?.message}
          <button type="submit">Criar Grupo</button>
        </form>

        {/* Mostrando todos os grupos */}
        {/* <div>
          {groups.map((group) => (
            <div key={group.id}>
              <div>{group.name}</div>
              <button onClick={() => removeGroup(group.id)}>Deletar</button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Groups;
