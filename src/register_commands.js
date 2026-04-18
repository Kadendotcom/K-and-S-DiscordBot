require('dotenv').config();
const {REST, Routes}= require('discord.js');

const commands = [ 
{
    name: 'hey',
    description: 'Replies with hey'},
    {name: 'bye',
    description: 'Replies with bai'},
    {name: 'k',
    description: 'Info on K'},
    {name: 's',
    description: 'Info on S'
},

];

const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);

(async () =>{
    try{
        console.log('Registering slash commands.....');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
            ),
            {body: commands}
        );

        console.log('Slash commands registered!')
        
    }catch(error){
        console.error(`There was an error: ${error}`);
    }
})();