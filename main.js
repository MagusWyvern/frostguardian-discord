const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'f!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);

    client.commands.set(command.name, command);
}

// public static void wait(int ms)
// {
//     try
//     {
//         Thread.sleep(ms);
//     }
//     catch(InterruptedException ex)
//     {
//         Thread.currentThread().interrupt();
//     }
// }

client.once('ready', () => {
    console.log('============');
    console.log('Frost Guardian is now online!');
    console.log('.....');
    console.log('Ready to receive command inputs.');
    console.log('.....');
    console.log('============');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
        console.log('[Ping command was used!]')
        console.log('Ready to receive next command inputs.')


    } else if (command == 'google') {
        message.channel.send('https://www.google.com');

    }
});




client.login('${{BOT_TOKEN}}');
