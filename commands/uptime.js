const { Client, Collection, MessageEmbed } = require(`discord.js`);

module.exports = {
  info: {
    name: "uptime",
    description: "Gives you the uptime of the Bot",
    usage: "",
    aliases: ["up"],
  },

  run: async function (client, message, args) {
  
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react("✅");
    return message.channel.send(new MessageEmbed().setColor("#00FFFF")
    .setTitle(`***Uptime:***\n\n\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``));


  }
}