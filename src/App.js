import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Routers from "./routes";
import GlobalStyle from "./styles/global";


function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
