import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Why from './components/Why';
import About from './components/About_Us';
import Departments from './components/Departments';
import Model from './components/Model';
import Connect from './components/Connect';
import Home from './components/Home';


function App() {
  return (
    <>
     
      <Navbar/>
      

      <Home />   {/*  Hero background behind Navbar */}
      <div className="container mt-5">
        <section id="about" className="py-5"><Why /></section>
        <section id="education" className="py-5"><About/></section>
        <section id="experience" className="py-5"><Departments /></section>
        <section id="skills" className="py-5"><Model /></section>
        <section id="resume" className="py-5"><Connect /></section> 
        <footer className="text-center py-4 mt-5">
          <p className="mb-0">© 2025 Dinesh Sripathi Panditharadhyula. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
