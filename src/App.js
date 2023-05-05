
import './App.css';
import MainRoutes from "./pages/mainRoutes";


// import MainRoutes from './pages/mainRoutes';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">

      <Navbar/>
      <MainRoutes/>

    </div>
  );
}

export default App;
