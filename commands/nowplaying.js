const { Client, Collection, MessageEmbed } = require("discord.js");
const sendError = require("../util/error")
const createBar = require("string-progressbar");

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    let song = serverQueue.songs[0]

    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("#00ffff")
      .addField("Name", `[${song.title}](${song.url})`, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req, true)
      .setFooter(`Views: ${song.views} | Ago: ${song.ago}`)
        return message.channel.send(thing)
   }
};
