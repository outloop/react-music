import React from 'react'
import { connect } from 'react-redux'
import { InputGroup, Container, FormControl, Spinner, ListGroup, Media, Image } from 'react-bootstrap'
import './index.css'
import { searchAction, inputAction, TYPE_SONG } from '../../actions/search'
import FontAwesome from 'react-fontawesome'
import Axios from 'axios'

class Search extends React.Component {
    render() {
        const { handleSearch, handleInput, searching, list, content } = this.props
        return (
            <div>
                <Container className='search-bar'>
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleInput.bind(this)} />
                        <InputGroup.Append>
                            <InputGroup.Text>
                                <FontAwesome name='search' onClick={handleSearch.bind(this, TYPE_SONG, content)} />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    {/* <InputGroup className="mb-3">
                    <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="搜索">
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_SONG)}>音乐</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_SINGER)}>歌手</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_ALBUM)}>专辑</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_LIST)}>歌单</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_VIDEO)}>视频</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleSearch.bind(this, TYPE_LRC)}>歌词</Dropdown.Item>
                    </DropdownButton>
                    <FormControl onChange={handleInput.bind(this)} />
                </InputGroup> */}
                </Container>
                <Container>
                    {searching === 1 && <Spinner animation="grow" variant="dark" />}
                    {
                        searching === 2 && (
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
                        )
                    }
                </Container>
            </div>
        )
    }
}




const mapStatusToProps = (state) => {
    return {
        content: state.search.content,
        list: state.search.list,
        searching: state.search.searching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSearch: (type, content) => {
            dispatch(searchAction({ list: [], status: 1 }))
            const searchUrl = '/music/netease/search?key=579621905&s=' + content + '&type=' + type + '&limit=20&offset=0'
            Axios.get(searchUrl).then(res => {
                dispatch(searchAction({ list: res.data.data, status: 2 }))
            }).catch(error => {
                console.log(error)
            })
        },
        handleInput: e => {
            dispatch(inputAction({ content: e.target.value }))
        }
    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(Search)