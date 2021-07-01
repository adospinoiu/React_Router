import './App.css';

//Import Sub-Components
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <h1>React Router Tutorial</h1>

      <Header />
      <About />
      <Profile />
    </div>
  );
}

export default App;
