import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";

const Activity = () => {
  //TOKEN
  const token = JSON.parse(localStorage.getItem("@RunLikeaDev:token")) || "";
  const decoded = jwt_decode(token);
  const usuario = decoded.user_id;

  //ATIVIDADES - POST
  const schemaAcitivty = yup.object().shape({
    title: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAcitivty) });

  const addActivity = ({ title }) => {
    const newActivity = {
      title,
      realization_time: "2021-03-10T15:00:00Z",
      group: 412,
    };
    api
      .post("/activities/", newActivity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        getActivity();
      })
      .catch((err) => console.log(err));
  };

  // ATIVIDADE - GET

  const [activity, setActivity] = useState([]);

  const getActivity = useCallback(
    (groupId) => {
      api
        //   .get(`/activities/?group=${groupId}`)
        .get(`/activities/?group=412`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setActivity(response.data.results);
          console.log(response.data.results);
        })
        .catch((err) => console.log(err));
    },
    [setActivity, token]
  );

  useEffect(() => {
    if (activity.length === 0) {
      getActivity();
    }
  }, [activity.length, getActivity]);

  //HÁBITOS - DELETE
  function removeActivity(id) {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getActivity();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //HTML
  return (
    <div>
      <form onSubmit={handleSubmit(addActivity)}>
        {/* {errors.username?.message} */}
        <input placeholder="Título" {...register("title")} />
        <button type="submit">Adicionar</button>
      </form>
      <div>
        {activity.map((act) => (
          <div key={act.id}>
            <div>{act.title}</div>
            <button onClick={() => removeActivity(act.id)}>Deletar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
