module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
      if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
  
        try {
          await command.execute(interaction);
        } catch (error) {
          console.error(error);
          await interaction.reply({ content: '❌ Erro ao executar o comando!', ephemeral: true });
        }
      }
  
      if (interaction.isButton()) {
        switch (interaction.customId) {
          case 'batalha':
            await interaction.reply({ content: '🎲 Você iniciou a **Batalha de Dados**!', ephemeral: true });
            break;
          case 'roleta':
            await interaction.reply({ content: '💥 Você puxou o gatilho na **Roleta Russa**!', ephemeral: true });
            break;
          case 'quiz':
            await interaction.reply({ content: '❓ Começou o **Quiz Rápido**!', ephemeral: true });
            break;
          case 'adivinhacao':
            await interaction.reply({ content: '🔮 Você está em **Adivinhação**!', ephemeral: true });
            break;
          default:
            await interaction.reply({ content: '❌ Botão desconhecido.', ephemeral: true });
        }
      }
    },
  };
  