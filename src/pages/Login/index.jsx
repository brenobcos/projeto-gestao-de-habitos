import { useAuth } from "../../providers/AuthContext";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
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

        // colocar o hottoast

        console.log(error)
    });
  };

  return (
    <>
      <button>Voltar</button>

      <div>
        <h1>CLUBE DA CORRIDA</h1>
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
          Ainda não é registrado? <button>Crie uma conta</button>
        </p>
      </div>
    </>
  );
};

export default Login;
