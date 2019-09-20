const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const cmdPass = process.env.MSG_SECRET;
const cmdCount = cmdPass.length;
const delimiter = process.env.MSG_DELIMITER;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/////////////////
//What needs to be done
////////////////

// on a message, take the substring and check for the environment pass, the command, the url for the file, the user id, guild id

client.on('message', (msg) => {

  const cmdcheck = msg.toString().substring(0, cmdCount)

  console.log(`Bot check: ${msg.author.bot}`);

  //check to see if it's a botew
  if (msg.author.bot) {
    console.log("It's a bot sending it");
    return false;
  }

  //check to see if the substring at the start and the pass matches
  if (cmdcheck !== cmdPass) {
    console.log("Didn't pass command check");
    return false;
  }

  //begin logic
  let breakup = msg.toString().split(delimiter);

  let command = breakup[1];
  let soundurl = breakup[2];
  let userid = breakup[3];
  let guildid = breakup[4];

  console.log(`Command: ${command}`);
  console.log(`Sound URL: ${soundurl}`);
  console.log(`User: ${userid}`);
  console.log(`Guild: ${guildid}`);

  if (command === "joinChannel") {

  }

  if (command === "leaveChannel") {

  }

})

// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
// });

client.login(process.env.BOT_SECRET);