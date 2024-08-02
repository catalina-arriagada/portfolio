import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar.jsx';
import Carrousel from './components/indexComponents/Carrousel';
import Contact from './components/Contact';
import Webs from './components/projects/Webs.jsx';
import Donations from './components/Donations.jsx';

function App() {

  return (
      <div className="App">
            <div class= "container">
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='/' element={<Carrousel />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='contacto' element={<Contact />}></Route>
                    <Route path='web' element={<Webs />}></Route>
                    <Route path='donaciones' element={<Donations />}></Route>
                </Route>
            </Routes>    
            </div>
      </div>
  );
}

export default App;
