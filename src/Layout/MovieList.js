import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetMovieList } from '../Actions/MovieListAction';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Input, CardImg, CardBody, CardTitle, Spinner } from 'reactstrap';

const MovieList = () => {

    const [searchValue, setSearchValue] = useState('');
    const [btnValue, setBtnValue] = useState('avengers');
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movie_list);

    useEffect(() => {
        dispatch(GetMovieList(btnValue));
    }, [dispatch, btnValue])

    const submitHandler = (e) => {
        e.preventDefault();
        setBtnValue(searchValue);
        setSearchValue('');
    }

    return (
        <React.Fragment>
            <Container className="mt-4 mb-4">
                <Form className="d-flex justify-content-center" onSubmit={(e) => submitHandler(e)}>
                    <Input type="text" placeholder="Search Movie" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                    <Button className="btn-success">Search</Button>
                </Form>
                <Row>
                    {
                        movieList.loading ? <Spinner style={{ width: '3rem', height: '3rem', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0', margin: 'auto' }} /> :
                            movieList.data.map(movie => {
                                let movieUrlName = movie.Title.replace(/\s+/g, '-').toLowerCase();
                                return <Col className="col-md-3 mt-3 mb-3" key={movie.imdbID}>
                                    <NavLink to={`/movie/${movie.imdbID}/${movieUrlName}`} className="card">
                                        <CardImg style={{ width: '100%', height: '300px', objectFit: 'contain' }} src={`${movie.Poster}`} alt={movie.Title} />
                                        <CardBody>
                                            <CardTitle tag="h5" style={{ fontSize: '15px', marginBottom: "0", textAlign: 'center' }}>{movie.Title}</CardTitle>
                                        </CardBody>
                                    </NavLink>
                                </Col>
                            })
                    }


                </Row>
            </Container>
        </React.Fragment>
    );
}

export default MovieList;
