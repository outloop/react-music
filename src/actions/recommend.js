export const BOUTIQUE = 'boutique'
export const NEWEST = 'newest'
export const MV = 'mv'

export const setBoutique = (obj) => {
    return {
        type: BOUTIQUE, 
        obj
    }
}

export const setNewest = (obj) => {
    return {
        type: NEWEST,
        obj
    }
}

export const setMv = (obj) => {
    return {
        type: MV,
        obj
    }
}