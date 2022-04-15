import dotenvFlow from "dotenv-flow"
dotenvFlow.config()

import discord from "./discord"
import twitch from "./twitch"

discord();
twitch();