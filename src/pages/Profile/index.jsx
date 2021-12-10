import { useProfile } from "../../providers/ProfileContext";

const Profile = () => {
  const { userName, setUserName } = useProfile;

  return (
    <>
      <button>Voltar</button>
      <div>
        <h1>RUN LIKE A DEV</h1>

        <form>
          <h2>Meu Perfil</h2>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />

          <button>Salvar</button>
        </form>
      </div>
    </>
  );
};

