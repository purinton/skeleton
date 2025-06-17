// events/interactionCreate.mjs
export default async function ({ client, log, msg, commandHandlers, ...contextData }, interaction) {
    const locale = interaction.locale || interaction.guild?.preferredLocale || 'en-US';
    const localeMsg = (key, defaultMsg) => msg(locale, key, defaultMsg, log);
    const handler = commandHandlers?.[interaction.commandName];
    if (handler) {
        await handler({ client, log, msg: localeMsg, ...contextData }, interaction);
    }
}
