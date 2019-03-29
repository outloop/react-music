import React from 'react'
import {connect} from 'react-redux'

class Hot extends React.Component {
    render() {
        return (
            <h1>热门</h1>
        )
    }
}

function mapStatusToProps() {
    return {

    }
}

function mapDispatchToProps() {
    return {
        
    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(Hot)