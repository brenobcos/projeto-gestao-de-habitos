import { Toaster } from 'react-hot-toast'
import Login from './pages/Login';

import Routers from "./routes";

function App() {
  return (
    <>
     <Toaster position = "top-center" reverseOrder={false} />
      <Login/>
      <Routers />
    </>

  );

}

export default App
