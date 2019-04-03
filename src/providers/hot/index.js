import React from 'react'
import { connect } from 'react-redux'
import {Container, Row, Col, Media, Image, Spinner} from 'react-bootstrap'
import Axios from 'axios'
import {hotList} from '../../actions/hot'

class Hot extends React.Component {
    clickToAlbum(id) {
        this.props.history.push('/album/' + id)
    }
    
    render() {
        const {list} = this.props
        if (!list) {
            return (
                <Spinner animation="grow" variant="dark" />
            )
        } else {
            return (
                <Container>
                    <ul className="list-unstyled">
                        {
                            list.map((val, key) => {
                                return (
                                    <Row key={key} onClick={this.clickToAlbum.bind(this, val.id)}>
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
            )
        }

    }
}

function mapStatusToProps(state) {
    return {
        list: state.hot.list
    }
}

function mapDispatchToProps(dispatch) {
    const hotUrl = '/music/netease/hotSongList?key=579621905&cat=全部&limit=20&offset=0'
    Axios.get(hotUrl).then(res => {
        dispatch(hotList({list: res.data.data}))
    }).catch(error => {
        console.log(error)
    })
    return {

    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(Hot)