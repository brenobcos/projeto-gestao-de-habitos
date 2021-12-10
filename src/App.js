import './App.css';
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Toaster position = "top-center" reverseOrder={false} />
      <Login/>
      </header>
    </div>
  );
}

export default App;
