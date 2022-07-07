const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		const msg = interaction.options.getString('message')
		const uri = encodeURI(`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${msg}`)
		const response = new MessageEmbed().setImage(uri).setTitle('Your QR Code')
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		interaction.reply({ embeds: [response] })
	},
};