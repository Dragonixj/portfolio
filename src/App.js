import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Intro from './components/Intro';
import About from './components/About';

function App() {
    return (
        <div className="bg-rosePine-base">
            <NavBar />
            <Intro />
            <About />
            <Projects />
        </div>
    );
}

export default App;
