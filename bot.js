const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`bot is ready ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenido a VRG5, ${member}`);
});

client.on('message', (msg) => {
        console.log(msg.content);
        if(msg == '/topo'){
            msg.reply('na na na clave el Mati ndeeaaa');
        }
    // If the msg content starts with "!kick"
    if (msg.content.startsWith('!kick')) {
        if (msg.member.hasPermission("ADMINISTRATOR")) {
            // Assuming we mention someone in the msg, this will return the user
            // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/msgMentions
            const user = msg.mentions.users.first();
            // If we have a user mentioned
            if (user) {
                // Now we get the member from the user
                const member = msg.guild.member(user);
                // If the member is in the guild
                if (member) {
                    /**
                     * Kick the member
                     * Make sure you run this on a member, not a user!
                     * There are big differences between a user and a member
                     */
                    member.kick('Optional reason that will display in the audit logs').then(() => {
                        // We let the msg author know we were able to kick the person
                        msg.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to kick the member,
                        // either due to missing permissions or role hierarchy
                        msg.reply('I was unable to kick the member');
                        // Log the error
                        console.error(err);
                    });
                } else {
                    // The mentioned user isn't in this guild
                    msg.reply('That user isn\'t in this guild!');
                }
                // Otherwise, if no user was mentioned
            } else {
                msg.reply('You didn\'t mention the user to kick!');
            }
        }
        else {
            msg.reply('No tienes permiso de admin . F');
        }
    }
});




client.login('NTc1MTQ0NjI1MDQ4NzgwODIw.XNDrPw.4cqLbRw58pv9IxaZfFgpBF3AttE');