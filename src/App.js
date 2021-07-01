import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

//Import Sub-Components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>  
        <Route path='/' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
    </BrowserRouter>

  );
}

export default App;
