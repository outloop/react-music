// 音乐搜索:type=song
// 歌手搜索:type=singer
// 专辑搜索:type=album
// 歌单搜索:type=list
// 视频搜索:type=video
// 电台搜索:type=radio
// 用户搜索:type=user
// 歌词搜索:type=lrc
export const TYPE_SONG = 'song'
export const TYPE_SINGER = 'singer'
export const TYPE_ALBUM = 'album'
export const TYPE_LIST = 'list'
export const TYPE_VIDEO = 'video'
export const TYPE_LRC = 'lrc'
export const SEARCH_ACTION = 'search'
export const INPUT_ACTION = 'input'

export const searchAction = (obj) => {
    return {
        type: SEARCH_ACTION,
        obj
    }
}

export const inputAction =(obj) => {
    return {
        type: INPUT_ACTION,
        obj
    }
}