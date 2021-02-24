const d = require('discord.js-selfbot')

const c = new d.Client()
const token = ""
const channel = ""
const message = "get flooded retard"

setInterval(async() => {
    let i = 0
    try {
        var interval = setInterval(async() => {
            // pre-7th message, stop for 6s
            if (i == 7) {
                clearInterval(interval)
            }
            await c.channels.cache.get(channel).send(message)
            i++
        }, 100)
    } catch {}
}, 6000)

c.login(token).catch((e) => console.log(e))