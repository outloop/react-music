import { connect } from 'react-redux'
import React from 'react'
import {add, del} from '../../actions/app'
import {THEME_DARK} from '../../actions/theme'
import Theme from '../../providers/theme'

class Counter extends React.Component {
  render() {
    const { value, addAction, delAction, theme } = this.props

    return <div className='container'>
      <h2>计数：{value}</h2>
      <div className='btn-group'>
        <button className={theme === THEME_DARK ? 'btn btn-primary' : 'btn btn-success'} onClick={addAction}>加</button>
        <button className={theme === THEME_DARK ? 'btn btn-warning' : 'btn btn-danger'} onClick={delAction}>减</button>
      </div>
     <Theme />
     </div>
  }
}


function mapStateToProps(state) {
  return {
    value: state.app.count,
    theme: state.common.theme
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addAction: () => dispatch(add()),
    delAction: () => dispatch(del())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)