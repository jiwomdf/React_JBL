import React from 'react';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

import Login from './pages/Login'
import Contact from './pages/Contact'
import BookList from './components/BookList';

import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider >
        <AuthContextProvider>

          <Router>
            <Navbar />

            <BookContextProvider>
              <Switch>
                <Route path="/About" component="About" />
                <Route path="/Contact" component={Contact} />
                <Route path="/Login" component={Login} />
                <Route path="/" component={BookList} />
              </Switch>
            </BookContextProvider>

          </Router>

        </AuthContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
