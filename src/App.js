import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

//Import Sub-Components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NotFound from './pages/NotFound';


function App() {
  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {/* This line changes what is displayed on the button based on the state of the click */}
        <button onClick={() => setLogin(!login)}>{login ? "Log Out" : "Log In"}</button>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/about" component={About} />

          {/* This controls if a user can access certain pages by determining if they are logged in or not */}
          <Route path="/profile">
            {login ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
