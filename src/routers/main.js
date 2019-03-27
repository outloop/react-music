import React from 'react'
import App from '../providers/app'
import { BrowserRouter, Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={App}></Route>
        </BrowserRouter>
    )
}
export default Router