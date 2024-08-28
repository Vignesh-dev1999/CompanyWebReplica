import './App.css';
import Hero from './components/hero/hero';
import Navbar from './components/nav/nav';
import Aboutus from './components/aboutus/aboutus';
import Services from './components/services/services';
import Migrat from './components/migrat/migrattoday';
import Today from './components/today/taoday';
import Different from './components/cloudd/cloudd';
import Stack from './components/stack/stack'
import People from './components/people/people';
import Benefites from './components/benefites/bene';
import Idea from './components/idea/idea';
import Recent from './components/recent/recent';
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Aboutus />
      <Services />
      <Migrat/> 
      <Today/>
      <Different/>
      <Stack/>
      <People/>
      <Benefites/>
      <Idea />
      <Recent/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
