import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieData } from '../Actions/MovieAction';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Table, Spinner } from 'reactstrap';

const Movie = (props) => {

    const movieId = props.match.params.movieID;
    const dispatch = useDispatch();
    const movieState = useSelector(state => state.movie_data);

    useEffect(() => {
        dispatch(GetMovieData(movieId))
    }, [dispatch, movieId])

    const data = movieState.data;



    return (
        <Container className="mt-4 mb-4">
            {
                movieState.loading ? <Spinner style={{ width: '3rem', height: '3rem', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0', margin: 'auto' }} /> :
                    <Row>

                        <Col className="col-md-5 mt-3 mb-3" key={data.imdbID}>
                            <Card>
                                <CardImg style={{ width: '100%', height: 'auto', objectFit: 'contain' }} src={`${data.Poster}`} alt={data.Title} />
                                <CardBody>
                                    <CardTitle tag="h5" style={{ fontSize: '15px', marginBottom: "0", textAlign: 'center' }}>{data.Title}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-md-7 mt-3 mb-3">
                            <Table>
                                <tbody>
                                    <tr>
                                        <th scope="row">Released</th>
                                        <td>{data.Released}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Runtime</th>
                                        <td>{data.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Genre</th>
                                        <td>{data.Genre}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Director</th>
                                        <td>{data.Director}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Writer</th>
                                        <td>{data.Writer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Actors</th>
                                        <td>{data.Actors}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Plot</th>
                                        <td>{data.Plot}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Language</th>
                                        <td>{data.Language}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Country</th>
                                        <td>{data.Country}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Awards</th>
                                        <td>{data.Awards}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IMDB Rating</th>
                                        <td>{data.imdbRating}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">BoxOffice</th>
                                        <td>{data.BoxOffice}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Production</th>
                                        <td>{data.Production}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
            }
        </Container>
    )
}

export default Movie
