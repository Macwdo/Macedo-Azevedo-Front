import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Processos from './Processos';
import Login from './Login';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path='/home' element={<Homepage/>}/>
        <Route exact path="/processos" element={<Processos/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
        )
   };

export default App;

