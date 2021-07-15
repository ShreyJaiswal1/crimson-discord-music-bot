const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "disconnect",
    description: "To disconnect bot from vc",
    usage: "",
    aliases: ["dc", "leave"],
  },

  run: async function (client, message, args) { 
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply({
               embed: {
                 color: "RED",
                 title: "You need to join a voice channel first!"
               }
             }).catch(console.error); 
         if (!message.guild.me.voice.channel) return message.reply({
               embed: {
                 color: "RED",
                 title: "I am not in a voice channel!"
               }
             }).catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply({
               embed: {
                 color: "RED",
                 title: "I am not in your voice channel!"
               }
             }).catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.leave(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send({
               embed: {
                 color: "#00FFFF",
                 title: "👋 **|** I have left the channel. See you again."
               }
             }).catch(console.error); 
             return 
            }
            channel.leave(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send({
               embed: {
                 color: "#00FFFF",
                 title: "👋 **|** I have left the channel. See you again."
               }
             }).catch(console.error); 
    } 
    
 };