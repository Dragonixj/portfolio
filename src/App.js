import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Intro from './components/Intro';
import About from './components/About';
import Credits from './components/Credits';

function App() {
    return (
        <div className="bg-rosePine-base">
            <NavBar />
            <Intro />
            <About />
            <Projects />
            <Credits />
        </div>
    );
}

export default App;
