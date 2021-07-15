const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "join",
    description: "Joins your voice channel",
    usage: "",
    aliases: ["j"],
  },

  run: async function (client, message, args) {
  const voiceChannel = message.member.voice.channel;
		 if (!voiceChannel) return message.reply('Please  enter a voice channel first.');

     let channel = message.member.voice.channel;
     const permissions = channel.permissionsFor(message.client.user);

     if (!permissions.has("CONNECT"))return sendError("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
     if (!permissions.has("SPEAK"))return sendError("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);
     if (!permissions.has("VIEW_CHANNEL"))return sendError("I do not have permissions to view your channel, make sure I have the proper permissions!")

  	if (client.voice.connections.has(voiceChannel.guild.id)) {
		return message.reply({
      embed: {
        color:"RED",
        title: 'I am already in a voice channel.'
      }
    });
      }
   	await voiceChannel.join();
	 	return message.reply({
       embed: {
         color: "#00ffff",
        title: `Joined **${voiceChannel.name}**!`
       }
     });

	 }
};