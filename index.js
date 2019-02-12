'use strict'
const Commando = require('discord.js-commando')
const {BotToken} = require('./config/keys')
const client = new Commando.Client()
client.registry.registerGroup('default','Default Commands')
client.registry.registerDefaults()
client.registry.registerCommandsIn(__dirname + '/commands')
client.on('Hello there',() => {
    console.log(client)
    console.log('Connected')
})

client.login(BotToken)