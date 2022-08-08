import Header from '../src/header/Header';
import './App.css';
import Download from './download/Download';
import Experience from './experience/Experience';
import Hero from './hero/Hero';
import Search from './search/Search';
import Footer from './footer/Footer';

function App() {
  return (
    <div className='App text-white overflow-hidden'>
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
