import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import './slider.css'

class Slider extends React.Component {

    render() {
        const {sliders} = this.props

        return <Carousel>
            {
                sliders.map((val, key) => {
                    return (
                        <Carousel.Item key={key}>
                            <img className="d-block w-100" src={val.coverImgUrl} alt='' />
                            <Carousel.Caption>
                                <Button variant="dark">{val.title}</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    }
}

export default Slider