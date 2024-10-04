
import './App.css';
import Home from './pages/HomePage/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './pages/LangingPage/Landing';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={< Landing/>}  />
<Route path='/home' element={< Home/>}  />

</Routes>
  


    </div>
  );
}

export default App;
