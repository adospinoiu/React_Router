import { BrowserRouter } from 'react-router-dom';

import './App.css';

//Import Sub-Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Profile />
      </div>
    </BrowserRouter>

  );
}

export default App;
