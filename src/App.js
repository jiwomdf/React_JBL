import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import ThemeContextProvider from './contexts/ThemeContext';
import ImageListContextProvider from './contexts/ImageListContext';
import UserContextProvider from './contexts/UserContext'
import PrivateRoute from './custom/PrivateRoute'

import Login from './pages/Login'
import Contact from './pages/Contact'
import Main from './pages/Main';
import About from './pages/About'
import Register from './pages/Register'
import Postitem from './pages/Postitem'
import Dashboard from './pages/Dashboard'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider >
        <UserContextProvider>

          <Router>
            <Navbar />


            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <ImageListContextProvider>
                <Route path="/Postitem" component={Postitem} />
                <PrivateRoute path="/Dashboard" component={Dashboard} />
                <Route path="/" exact component={Main} />
              </ImageListContextProvider>
            </Switch>

            <Footer />
          </Router>

        </UserContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
