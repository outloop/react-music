import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav nav-pills nav-justified">
                <a className="nav-item nav-link active" href="#">Active</a>
                <a className="nav-item nav-link" href="#">Much</a>
                <a className="nav-item nav-link" href="#">Link</a>
                <a className="nav-item nav-link disabled" href="#">Disabled</a>
            </nav>
        )
    }
}

export default Nav