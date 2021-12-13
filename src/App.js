import { Toaster } from "react-hot-toast";
import Routers from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Routers />
    </>
  );
}

export default App;
