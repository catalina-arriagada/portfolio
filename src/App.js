import './App.css';
import Navbar from './components/Navbar.jsx';
import Index from './components/Index.jsx';

function App() {
  return (
    <div className="App">
      <div class= "container">
        <header>
          <Navbar />
        </header>
        <div class="row">
          <Index />
        </div>

      </div>
    </div>
  );
}

export default App;
