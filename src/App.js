
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
    </>
  )
}

export default App;
