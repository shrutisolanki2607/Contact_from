import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContactForm from './components/ContactForm';
import './main_container.css'

function App() {
  return (
    <div className="App">
      <main className='main_container'>
      <Navigation/>
      <Hero/>
      <ContactForm/>
      </main>
    </div>
  );
}

export default App;
