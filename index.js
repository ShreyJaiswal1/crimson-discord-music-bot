require("dotenv").config();//Loading .env
const express = require(`express`)
const app = express();
const port = 3000
app.get('/', (req, res) => res.send("Hey i'm online :D"))
app.listen(port, () =>
console.log(`your app is listening at https://localhost:${port}`)
);

const fs = require("fs");
const { Collection, Client, MessageEmbed } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
client.config = {
  prefix: process.env.PREFIX
}

client.on('message', async (message) => {
  if(message.author.bot)return;
  if(message.content.includes(client.user.id)) {

    let lol = new MessageEmbed()
    .setColor("#00FFFF")
    .setAuthor(client.user.username, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`My prefix is **${process.env.PREFIX}** To get started type \`${process.env.PREFIX}help\``)
    message.channel.send(lol)
  } 
});


//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

//logging in to discord
client.login(process.env.TOKEN