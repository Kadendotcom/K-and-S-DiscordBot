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
client.on('interactionCreate',(interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName=='hey'){
        interaction.reply('hi!');
    }
    if(interaction.commandName=='bye'){
        interaction.reply('baiii!');
    }
    if(interaction.commandName=='s'){
        interaction.reply('S is one of the Devs of K&S-Bot! S is a Computer Science student seeking internships. S is interested in ...');
    }
    if(interaction.commandName=='k'){
        interaction.reply('K is one of the Devs of K&S-Bot! K is a Computer Science student seeking internships. K is interested in cybersecurity, computer vision, big data anaylsis, AI, automation and data security. K works in Java, JS, Python and C. ');
    }
});
client.login(token);