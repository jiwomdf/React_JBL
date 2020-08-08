import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import ThemeContextProvider from './contexts/ThemeContext';
import ImageListContextProvider from './contexts/ImageListContext';

import Login from './pages/Login'
import Contact from './pages/Contact'
import Main from './pages/Main';
import About from './pages/About'
import Register from './pages/Register'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider >

        <Router>
          <Navbar />

          <ImageListContextProvider>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/" component={Main} />
            </Switch>
          </ImageListContextProvider>
          <Footer />
        </Router>

      </ThemeContextProvider>

    </div>
  );
}

export default App;
