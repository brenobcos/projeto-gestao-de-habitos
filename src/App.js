import { Toaster } from "react-hot-toast";
import Routers from "./routes";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routers />
    </>
  );
}

export default App;
