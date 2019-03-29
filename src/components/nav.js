import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'
import './nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div className='route-nav d-flex flex-column'>
                <ButtonGroup>
                    <Button variant="dark">
                        <NavLink activeClassName='nav-active' className='nav-link' exact={true} to={{ pathname: '/recommend' }}>推荐</NavLink>
                    </Button>
                    <Button variant="dark">
                        <NavLink activeClassName='nav-active' className='nav-link' to={{ pathname: '/hot' }}>热门</NavLink>
                    </Button>
                    <Button variant="dark">
                        <NavLink activeClassName='nav-active' className='nav-link' to={{ pathname: '/search' }}>搜索</NavLink>
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Nav