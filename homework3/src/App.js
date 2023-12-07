import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import FailedLogin from './components/FailedLogin/FailedLogin';
import SuccessLogin from './components/SuccessLogin/SuccessLogin';

function App() {
  return (
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
  );
}

export default App;
