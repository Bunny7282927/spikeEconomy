// Define
const Discord = require("discord.js")
const client = new Discord.Client({intents :["GUILDS", "GUILD_MESSAGES"]});
const db = require("@replit/database")
const press = String.raw`
░██████╗██████╗░██╗██╗░░██╗███████╗
██╔════╝██╔══██╗██║██║░██╔╝██╔════╝
╚█████╗░██████╔╝██║█████═╝░█████╗░░
░╚═══██╗██╔═══╝░██║██╔═██╗░██╔══╝░░
██████╔╝██║░░░░░██║██║░╚██╗███████╗
╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝

██╗░░██╗░█████╗░░██████╗████████╗
██║░░██║██╔══██╗██╔════╝╚══██╔══╝
███████║██║░░██║╚█████╗░░░░██║░░░
██╔══██║██║░░██║░╚═══██╗░░░██║░░░
██║░░██║╚█████╔╝██████╔╝░░░██║░░░
╚═╝░░╚═╝░╚════╝░╚═════╝░░░░╚═╝░░░`

const fs = require("fs"); 
client.commands = new Discord.Collection(); 
const prefix = "s"
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js")); 
for (file of commands) { 
    const commandName = file.split(".")[0]

    const command = require(`./Commands/${commandName}`)
                            client.commands.set(commandName, command)}
client.on("messageCreate", message=> {
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g) 
        const commandName = args.shift() 
        const command = client.commands.get(commandName) 
        if(!command) return 
    command.run(client, message, args)
}})
client.on("ready", () => {
    console.log(press)
    client.user.setActivity("SPIKEHOST, SPIKEMC")
})
client.login("OTkxOTgyMDQ4NjQwMjUzOTUy.G6HNYB.9zb-fNfqbrnNbCTRJJ706vYMC_yvUxReP-a2EA")