const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const options = [
  'Tails',

  'Heads',

];

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'randomice') {
    await interaction.reply(
      options[Math.floor(Math.random() * options.length)]
    );
  }
});

client.login(process.env.TOKEN);
