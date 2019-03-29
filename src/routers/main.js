import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Recommend from '../providers/recommend'
import Hot from '../providers/hot'
import Search from '../providers/search'
import Nav from '../components/nav'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <div className='route-content'>
                <Switch>
                    <Route exact path='/recommend' component={Recommend}></Route>
                    <Route path='/hot' component={Hot}></Route>
                    <Route path='/search' component={Search}></Route>
                    <Redirect path='/' to={{ pathname: '/recommend' }} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Router