import React from 'react'
import { connect } from 'react-redux'
import { dark, light, THEME_LIGHT, THEME_DARK } from '../../actions/theme'

class Theme extends React.Component {

    render() {
        const { theme, lightThemeAction, darkThemeAction } = this.props
        const activeLabelClass = 'btn btn-secondary active'
        const labelClass = 'btn btn-secondary'

        return (
            <div>
                <h3>更改主题</h3>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className={theme === THEME_LIGHT ? activeLabelClass : labelClass}>
                        <input type="radio" name="options" id="option1" autoComplete="off" onClick={lightThemeAction} />白
                </label>
                    <label className={theme === THEME_DARK ? activeLabelClass : labelClass}>
                        <input type="radio" name="options" id="option2" autoComplete="off" onClick={darkThemeAction} />黑
                    </label>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        theme: state.common.theme
    }
}

function mapDispatchToProps(dispatch) {
    return {
        darkThemeAction: () => dispatch(dark()),
        lightThemeAction: () => dispatch(light())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme)