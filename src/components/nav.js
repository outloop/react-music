import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup } from 'react-bootstrap'
import './nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div className='route-nav d-flex flex-column'>
                <ButtonGroup>
                    <NavLink activeClassName='active' className='nav-link btn btn-dark' exact={true} to={{ pathname: '/recommend' }}>推荐</NavLink>
                    <NavLink activeClassName='active' className='nav-link btn btn-dark' to={{ pathname: '/hot' }}>热门</NavLink>
                    <NavLink activeClassName='active' className='nav-link btn btn-dark' to={{ pathname: '/search' }}>搜索</NavLink>
                </ButtonGroup>
            </div>
        )
    }
}

export default Nav