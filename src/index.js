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
});
//Uncomment this artifact in order to enable automaitc "Hello" responses from bot when a user sends a message "hello".
// client.on('messageCreate',(message)=>{
//     if(message.author.bot){
//         return;
//     }

//     if(message.content=="hello"){
//     message.reply("hello")
// }
// });
client.once('interactionCreate',(interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName=='hey'){
        interaction.reply('hi!');
    }
    if(interaction.commandName=='bye'){
        interaction.reply('baiii!');
    }
});
client.login(token);