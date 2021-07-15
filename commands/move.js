require('array.prototype.move');

module.exports = {
  info: {
    name: "move",
    description: "Move songs around in the queue.",
    usage: "<queue> <number>",
    aliases: ["mv"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    if (channel.id !== message.guild.me.voice.channel.id) return message.reply({
       embed: {
          color: "RED",
          description: "I am not in your voice channel!"
       }
   }).catch(console.error); 
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could move for you.", message.channel);

    if (!args.length) return message.reply(`Usage: ${message.client.config.prefix}move <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.config.prefix}move <Queue Number>`);

    let songMoved = serverQueue.songs[args[0] - 1];

    serverQueue.songs.move(args[0] - 1, 1);
    serverQueue.textChannel.send({
      embed: {
        color: "#00FFFF",
        titlr: `**MOVED:** ${songMoved.title}`
      }
    });
  }
};