import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetMovieList } from './Actions/MovieListActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, NavbarBrand, Form, Button, Input, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './App.css';

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [btnValue, setBtnValue] = useState('avengers');
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movie_list);

  useEffect(() => {
    dispatch(GetMovieList(btnValue));
  }, [btnValue])

  const submitHandler = (e) => {
    e.preventDefault();
    setBtnValue(searchValue);
    setSearchValue('');
  }

  return (
    <React.Fragment>
      <Navbar color="dark" dark>
        <NavbarBrand href="http://www.omdbapi.com/" target="_blank" className="mr-auto text-uppercase">Omdb API</NavbarBrand>
        <Form inline onSubmit={(e) => submitHandler(e)}>
          <Input type="text" placeholder="Search Movie" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
          <Button className="btn-success">Search</Button>
        </Form>
      </Navbar>
      <Container className="mt-4 mb-4">
        <Row>
          {
            movieList.data.map(movie => {
              return <Col className="col-md-3 mt-3 mb-3" key={movie.imdbID}>
                <Card>
                  <CardImg style={{ width: '100%', height: '300px', objectFit: 'contain' }} src={`${movie.Poster}`} alt={movie.Title} />
                  <CardBody>
                    <CardTitle tag="h5" style={{ fontSize: '15px', marginBottom: "0", textAlign: 'center' }}>{movie.Title}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            })
          }


        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
