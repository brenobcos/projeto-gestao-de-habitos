import { useAuth } from "../../providers/AuthContext";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Insira seu username"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const handleSignIn = (data) => {
    signIn(data).catch((error) => {
      toast.error("Username ou senha inválidos!");
      console.log(error);
    });
  };

  // if (localStorage.getItem("@RunLikeaDev:token")) {
  //   return <Redirect to="/Dashboard" />;
  // }

  return (
    <>
      <button onClick={() => history.push("/")}>Voltar</button>

      <div>
        <h1>RUN LIKE A DEV</h1>
        <button>Sign in with Google</button>
        <hr />
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <p>Username</p>
            <input
              type="text"
              placeholder="Usuário"
              {...register("username")}
            />
          </div>
          <span>{errors.username?.message}</span>

          <div>
            <p>Senha</p>
            <input
              type="password"
              placeholder="Min. 6 caracteres"
              {...register("password")}
            />
          </div>
          <span>{errors.password?.message}</span>

          <button>Login</button>
        </form>
        <p>
          Ainda não é registrado?{" "}
          <button onClick={() => history.push("/registration")}>
            Crie uma conta
          </button>
        </p>

        {/* Redirecionar o usuário para o dashboard (history.push)*/}
      </div>
    </>
  );
};

export default Login;
