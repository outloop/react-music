import React from 'react'
import { connect } from 'react-redux'
import { Media, Jumbotron, Container, Spinner, Image, ListGroup, Button } from 'react-bootstrap'
import Axios from 'axios'
import { songList } from '../../actions/album'
import './index.css'
import FontAwesome from 'react-fontawesome';

class Album extends React.Component {
    clickToHistory() {
        this.props.history.goBack()
    }
    render() {
        const { detail } = this.props
        if (!detail) {
            return (
                <Spinner animation="grow" />
            )
        } else {
            const list = detail.songs
            return (
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>{detail.songListName}</h1>
                            <p>{detail.songListDescription}</p>
                            <p><small>播放量：{detail.songListPlayCount}</small></p>

                        </Container>
                    </Jumbotron>
                    <ListGroup>
                        {
                            list.map((val, key) => {
                                return (
                                    <ListGroup.Item key={key}>
                                        <Media as="li">
                                            <Image roundedCircle width={64} height={64} className="mr-3" src={val.pic} alt={val.singer} />
                                            <Media.Body>
                                                <h6>{val.name}</h6>
                                                <small>{val.singer}·{val.name}</small>
                                                <div className='pull-right'><FontAwesome name='far fa-play-circle' /></div>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>

                                )
                            })
                        }
                    </ListGroup>
                    <div className='float-button'>
                        <Button onClick={this.clickToHistory.bind(this)}><FontAwesome name='undo'/></Button>
                    </div>
                </div>

            )
        }
    }
}

function mapStatusToProps(state) {
    return {
        detail: state.album.detail
    }
}

function mapDispatchToProps(dispatch, props) {
    const detailUrl = 'https://api.bzqll.com/music/netease/songList?key=579621905&limit=10&offset=0&id=' + props.match.params.id;
    Axios.get(detailUrl).then(res => {
        dispatch(songList({ detail: res.data.data }))
    }).catch(error => {
        console.log(error)
    })
    return {}
}

export default connect(mapStatusToProps, mapDispatchToProps)(Album)