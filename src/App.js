import { Toaster } from "react-hot-toast";
import Routers from "./routes";
import GlobalStyle from "./styles/global";

import "./styles/Theme.less";

function App() {
  return (
    <>
      <Routers />
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
