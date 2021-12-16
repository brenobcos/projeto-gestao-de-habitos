import { useAuth } from "../../providers/AuthContext";

import { toast } from "react-hot-toast";

import { useHistory, Redirect } from "react-router-dom";

import Logo from "../../components/Logo";
import { Button, Input, Form } from "antd";

const Login = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSignIn = (data) => {
    signIn(data)
      .then((_) => {
        return history.push("/dashboard");
      })
      .catch((error) => {
        toast.error("Username ou senha inválidos!");
        console.log(error);
      });
  };

  if (localStorage.getItem("@RunLikeaDev:token")) {
    return <Redirect to="/dashboard" />;
  }

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
            onFinish={handleSignIn}
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

            <Form.Item name="password" label="Senha">
              <Input type="password" placeholder="Min. 6 caracteres" />
            </Form.Item>

            <Button htmlType="submit">Login</Button>
          </Form>
          Ainda não é registrado?
          <div
            onClick={() => history.push("/signup")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Crie uma conta
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
