require ('dotenv').config();
const token = process.env.BOT_TOKEN;
const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('clientReady',(c) =>{
    console.log(`${c.user.tag} is online!`);
})

client.on('messageCreate',(message)=>{
    if(message.author.bot){
        return;
    }

    if(message.content=="hello"){
    message.reply("hello")
}
});

client.login(token);