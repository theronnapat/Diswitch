import dotenvFlow from "dotenv-flow"
dotenvFlow.config()

import discord from './discord/index.js'
import twitch from './twitch/index.js'

discord()
twitch()