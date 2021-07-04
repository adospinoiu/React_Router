import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

//Import Sub-Components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <button>Login</button>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
