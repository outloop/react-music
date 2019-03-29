import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './block-list.css'

class Block extends React.Component {
    render() {
        const { list, title } = this.props;
        return <Container className='block'>
            <Row>
                <Col>
                    <h3>{title}</h3>
                </Col>
            </Row>
            <Row>
                {
                    list.map((val, key) => {
                        return (
                            <Col xs={6} md={6} key={key}>
                                <Card style={{ width: '11rem' }}>
                                    <Card.Img variant="top" src={val.coverImgUrl} />
                                    <Card.Body>
                                        <Card.Text>{val.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Button variant='dark' className='radio-block-button' size='sm'>查看</Button>

                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    }
}

export default Block