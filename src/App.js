import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
