import Timer from './components/Timer'
import LandingSection from './components/LandingSection';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <LandingSection />
      <About/>
      <Resume/>
      <Skills/>
      <Contacts/>
    </div>
  );
}

export default App;
