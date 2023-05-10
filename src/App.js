
import './App.css';

import MainRoutes from "./pages/mainRoutes";

import { useEffect, useState } from "react"
import Navbar from './Components/Navbar';
import { Spinner } from '@chakra-ui/spinner';
import Footer1 from './Components/Footer1';


function App() {

  const [state, setState] = useState(true);

  useEffect(() => {


    setTimeout(() => {
      setState(false);
    }, 1000);

  }, [])

  return (
    <div className="App">
      {state ? <Spinner
        thickness='4px'
        speed='0.6s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        position="fixed"
        left="50%"
        top="50%"
      /> :
        <>
          {/* <Navbar /> */}
          <MainRoutes />
          <Footer1/>
        </>
      }


    </div>
  );
}

export default App;
