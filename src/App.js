
import { About } from './About/About';
import './App.css';
import { Card } from './Card/Card';
import { Contact } from './Contact/Contact';
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
      <Contact/>
    </div>
  );
}

export default App;
