const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ping",
    description: "Gets the bot's ping",
    usage: "",
    aliases: ["pong"],
  },

  run: async function (client, message, args) { 
    let ping = new MessageEmbed()
    .setTitle("🏓 Ping")
    .setColor("#00FFFF")
    .setDescription(`Latency is **${Date.now() - message.createdTimestamp}**ms.\nAPI Latency is **${Math.round(client.ws.ping)}**ms.`)    
    return message.channel.send(ping)
  }
};
