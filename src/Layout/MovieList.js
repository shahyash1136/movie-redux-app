import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetMovieList } from '../Actions/MovieListAction';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Col, Form, Button, Input, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieList = () => {

    const [searchValue, setSearchValue] = useState('');
    const [btnValue, setBtnValue] = useState('avengers');
    const [pageNum, setPageNum] = useState(1);
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movie_list);

    useEffect(() => {
        dispatch(GetMovieList(btnValue, pageNum));
    }, [btnValue, pageNum, dispatch])



    const submitHandler = (e) => {
        e.preventDefault();
        setBtnValue(searchValue);
        setSearchValue('');
        setPageNum(1)
    }

    return (
        <React.Fragment>
            <Container className="mt-4 mb-4">
                <Form className="d-flex justify-content-center" onSubmit={(e) => submitHandler(e)}>
                    <Input type="text" placeholder="Search Movie" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                    <Button className="btn-success">Search</Button>
                </Form>
                <>
                    {
                        <InfiniteScroll
                            dataLength={Number(movieList.data.length)} //This is important field to render the next data
                            next={() => setPageNum(pageNum + 1)}
                            hasMore={true}
                            /* loader={<h4>Loading...</h4>} */
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                            className='row'
                        >
                            {/* {console.log(movieList.data)} */}
                            {
                                movieList.data.map(movie => {
                                    let movieUrlName = movie.Title.replace(/\s+/g, '-').toLowerCase();
                                    return <Col className="col-md-4 col-lg-3 mt-3 mb-3 col-sm-6 col-12" key={v4()}>
                                        <NavLink to={`/movie/${movie.imdbID}/${movieUrlName}`} className="card">
                                            <CardImg style={{ width: '100%', height: '300px', objectFit: 'contain' }} src={`${movie.Poster}`} alt={movie.Title} />
                                            <CardBody>
                                                <CardTitle tag="h5" style={{ fontSize: '15px', marginBottom: "0", textAlign: 'center' }}>{movie.Title}</CardTitle>
                                            </CardBody>
                                        </NavLink>
                                    </Col>
                                })
                            }
                        </InfiniteScroll>

                    }


                </>
            </Container>
        </React.Fragment >
    );
}

export default MovieList;
