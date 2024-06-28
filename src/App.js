import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';

function App() {
  return (
      <div className="App">
            <div class= "container">
            <Routes>
                <Route path='/' element={<Navbar />}>
                  <Route path='/' element={<Carrousel />}></Route>
                  <Route path='about' element={<About/>}></Route>
                </Route>
            </Routes>               
            </div>
      </div>
  );
}

export default App;
