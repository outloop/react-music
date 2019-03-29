import React from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { setBoutique, setNewest, setMv } from '../../actions/recommend'
import { Container, Row, Col, Card, Button, Carousel, Media, Image } from 'react-bootstrap'
import './index.css'

class Recommond extends React.Component {

    render() {
        const { sliders, mvs, albums } = this.props
        return (
            <div className='content'>
                <Carousel>
                    {
                        sliders.map((val, key) => {
                            return (
                                <Carousel.Item key={key}>
                                    <img className="d-block w-100" src={val.coverImgUrl} alt='' />
                                    <Carousel.Caption>
                                        <Button variant="dark ellipsis">{val.title}</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>

                <Container className='block'>
                    <Row>
                        <Col>
                            <h3>推荐MV</h3>
                        </Col>
                    </Row>
                    <Row>
                        {
                            mvs.map((val, key) => {
                                return (
                                    <Col xs={6} md={6} key={key}>
                                        <Card>
                                            <Card.Img variant="top" src={val.pic} />
                                            <Card.Body>
                                                <Card.Text className='ellipsis'>{val.name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Button variant='dark' className='radio-block-button' size='sm'>播放</Button>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col><h3>推荐歌单</h3></Col>
                    </Row>
                    <ul className="list-unstyled">
                        {
                            albums.map((val, key) => {
                                return (
                                    <Row key={key}>
                                        <Col xs={12} md={12}>
                                            <Media as="li" >
                                                <Image rounded width={64}
                                                    height={64}
                                                    className="mr-3"
                                                    src={val.coverImgUrl}
                                                    alt="" />

                                                <Media.Body>
                                                    <h5 className='ellipsis media-des'>{val.title}</h5>
                                                    <p className='ellipsis media-des'>
                                                        {val.description}
                                                    </p>
                                                </Media.Body>
                                            </Media>
                                        </Col>
                                    </Row>

                                )
                            })
                        }
                    </ul>
                </Container>


            </div>
        )
    }
}

function mapStatusToProps(state) {
    return {
        sliders: state.recommend.sliders,
        mvs: state.recommend.mvs,
        albums: state.recommend.albums
    }
}

function mapDispatchToProps(dispatch) {
    const newestUrl = '/music/netease/hotSongList?key=579621905&cat=全部&limit=10&offset=0&order=new'
    const albumUrl = '/music/netease/highQualitySongList?key=579621905&cat=全部&limit=10'
    const mvUrl = '/music/netease/topMvList?key=579621905&limit=6&offset=0'
    Axios.get(newestUrl).then(res => {
        dispatch(setNewest({ list: res.data.data }))
        Axios.get(mvUrl).then(res => {
            dispatch(setMv({ list: res.data.data }))
            Axios.get(albumUrl).then(res => {
                dispatch(setBoutique({ list: res.data.data.playlists }))
            })
        })
    }).catch(error => {
        console.log(error)
    });
    return {

    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(Recommond)