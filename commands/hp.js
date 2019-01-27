const HypixelAPI = require('hypixel-api')

const client = new HypixelAPI('API-key')

client.getPlayer('name', 'Ethanent').then((player) => {
    console.log(player)
}).catch((err) => {
    console.error('Error! ' + err)
})
