export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const dark = (props) => {
    return {
        type: THEME_DARK,
        props
    }
}

export const light = (props) => {
    return {
        type: THEME_LIGHT,
        props
    }
}

