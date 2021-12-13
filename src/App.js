import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
