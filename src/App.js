import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>  
    </BrowserRouter>

  );
}

export default App;
