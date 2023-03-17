
import { About } from './About/About';
import './App.css';
import { Card } from './Card/Card';
import { Navbar } from './Navbar/Navbar';

function disableScroll() {
  document.body.classList.add('no-scroll');
}

function App() {

  window.onload = disableScroll;

  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Card/>
    </div>
  );
}

export default App;
