const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    
    let invite = new MessageEmbed()
    .setAuthor(`INVITE ${client.user.username.toUpperCase()}`, client.user.displayAvatarURL())
    .setDescription(`**HEY THANKS FOR SHOWING INTEREST TO ${client.user.username.toUpperCase()} BOT. THIS BOT OFFERS HIGH QUALITY MUSIC AND THIS IS ABOLUTELY FREE OF COST SO IF YOU ARE THINKING TO INVITE THIS BOT SO DONT DO DELAY IN INVITING THE BOT!!\n[INVITE ${client.user.username.toUpperCase()}](https://discord.com/api/oauth2/authorize?client_id=${client.user.id})&permissions=8&scope=bot)\n\nINVITE ORIGINAL BOTS FROM HERE\n[INVITE CRIMSON](https://discord.com/api/oauth2/authorize?client_id=799287753329475655&permissions=8&scope=bot)\n\n[INVITE CRIMSON 2](https://discord.com/api/oauth2/authorize?client_id=816609366098706442&permissions=8&scope=bot)\n\n[INVITE CRIMSON 3](https://discord.com/api/oauth2/authorize?client_id=816609748480688159&permissions=8&scope=bot)**\n\nJOIN OUR **[SUPPORT SERVER](https://discord.gg/an3CGcNppk)** TO REPORT BUG OR TO GIVE SUGGESTIONS`)
    .setColor("#00ffff")
    return message.channel.send(invite);
  },
};
