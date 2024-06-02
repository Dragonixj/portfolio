import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Intro from './components/Intro';
import Credits from './components/Credits';
import Skills from './components/Skills';

function App() {
    return (
        <div className="bg-rosePine-base">
            <NavBar />
            <Intro />
            <Skills />
            <Projects />
            <Credits />
        </div>
    );
}

export default App;
