// commands/help.mjs
export default async function ({ log, msg }, interaction) {
    log.debug('help Request', { interaction });
    const response = {
        content: msg('help', 'This is the default help text.'),
        flags: 1 << 6, // EPHEMERAL
    };
    log.debug('help Response', { response });
    await interaction.reply(response);
}
