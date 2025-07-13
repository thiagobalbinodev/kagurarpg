const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('jogar')
    .setDescription('Inicia um jogo aleatório com opções interativas'),
    
  async execute(interaction) {
    // 🖼️ Embed com imagem e título
    const embed = new EmbedBuilder()
      .setTitle('🔥 Sala Principal')
      .setDescription('Clique em um dos botões abaixo para prosseguir:')
      .setImage('https://cdn.discordapp.com/attachments/1393960178428153980/1393970051203469322/IMG_6159.jpg?ex=68751b46&is=6873c9c6&hm=8d2f277a7c6c68265ebe26dde17d7825c8e706d1ea3c02c569d44fe298bd5dc3&') // você pode trocar por outra imagem
      .setColor(0x5865F2); // cor roxa padrão do Discord

    // 🔘 Linha com 4 botões
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('jogar')
        .setLabel('🎮 Jogar')
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId('criarpersonagem')
        .setLabel('👘 Crie seu personagem')
        .setStyle(ButtonStyle.Danger),

    );

    await interaction.reply({
      embeds: [embed],
      components: [row]
    });
  },
};
