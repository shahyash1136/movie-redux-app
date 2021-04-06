import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import MovieList from './Layout/MovieList';
import Movie from './Layout/Movie';

const App = () => {

  return (
    <Router>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto text-uppercase">Omdb API</NavbarBrand>
      </Navbar>
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path="/movie/:movieID/:movieName" component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
