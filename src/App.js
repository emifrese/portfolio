import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
