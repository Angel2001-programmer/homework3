import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import FailedLogin from './components/FailedLogin/FailedLogin';
import SuccessLogin from './components/SuccessLogin/SuccessLogin';
import {useState, createContext, useEffect} from 'react';

export const MContext = createContext();

function App() {
  const [isLogged, setisLogged] = useState(false);
  console.log(isLogged);

  return (
    <MContext.Provider value={[isLogged, setisLogged]}>
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/FailedLogin' element={<FailedLogin/>}/>
            <Route path='/SuccessLogin' element={<SuccessLogin/>}/>
          </Routes>
    </BrowserRouter>
    </header>
    </div>
    </MContext.Provider>
  );
}

export default App;
