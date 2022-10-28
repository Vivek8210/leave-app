import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import MainRouters from './Routers/MainRouters';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <MainRouters/>
 
    </div>
  );
}

export default App;
