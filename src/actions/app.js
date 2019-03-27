export const ADD = 'ADD'
export const DEL = 'DEL'

export const add = (obj) => {
    return {
        type: ADD,
        obj
    }
}

export const del = (obj) => {
    return {
        type: DEL,
        obj
    }
}