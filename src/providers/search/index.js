import React from 'react'
import {connect} from 'react-redux'

class Search extends React.Component {
    render() {
        return (
            <h1>搜索</h1>
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

export default connect(mapStatusToProps, mapDispatchToProps)(Search)