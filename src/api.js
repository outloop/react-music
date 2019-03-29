import Axios from 'axios'

export const getBoutique = (limit=100) =>{
    const url = 'https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0'
    Axios.get(url).then(function(res) {
        console.log(res)
    })
}