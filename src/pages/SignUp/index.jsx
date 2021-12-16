import api from "../../services/api";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";

import Logo from "../../components/Logo";
import { Button, Input, Form } from "antd";

const SignUp = () => {
  const history = useHistory();

  const submitUser = ({ username, email, password }) => {
    const user = { username, email, password };

    api
      .post("/users/", user)
      .then((res) => {
        console.log(res.data);
        return history.push("/login");
      })
      .then((_) => toast.success("Successfully toasted!"))
      .catch((err) => toast.error("This didn't work."));
  };

  return (
    <>
      <div
        onClick={() => history.push("/")}
        style={{ margin: "40px", cursor: "pointer" }}
      >
        Voltar
      </div>
      <div
        style={{
          width: "80vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          margin: "10vh auto",
        }}
      >
        <div
          style={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo white />
          <Form
            className="form"
            onFinish={submitUser}
            style={{
              width: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Form.Item name="username" label="Usuário">
              <Input placeholder="Usuário" autoComplete="off" />
            </Form.Item>

            <Form.Item name="email" label="E-mail">
              <Input
                type="email"
                placeholder="exemplo@site.com"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item name="password" label="Senha">
              <Input type="password" placeholder="Min. 6 caracteres" />
            </Form.Item>

            <Button htmlType="submit">Cadastrar</Button>
          </Form>
          Já é cadastrado?
          <div
            onClick={() => history.push("/login")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Faça o login
          </div>
        </div>
      </div>
    </>

    // <div>
    //   <h3>Cadastro</h3>

    //   <form onSubmit={handleSubmit(submitUser)}>
    //     <input placeholder="Nome de usuario" {...register('username')} />
    //     {errors.username?.message}

    //     <input placeholder="E-mail" {...register('email')} />
    //     {errors.email?.message}

    //     <input placeholder="Senha" type="password" {...register('password')} />
    //     {errors.password?.message}

    //     <input
    //       placeholder="Confirmar senha"
    //       type="password"
    //       {...register('confirmPassword')}
    //     />
    //     {errors.confirmPassword?.message}
    //     <button type="submit">Cadastrar</button>
    //   </form>
    // </div>
  );
};

export default SignUp;
