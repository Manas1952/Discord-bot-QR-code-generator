const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder().setName('generateqr').setDescription('Replies with pong!!').addStringOption(option => {
    return option.setName('message').setDescription('Enter text to get QR Code').setRequired(true)
  })
}