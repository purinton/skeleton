// events/ready.mjs
export default async function ({ log, presence }, client) {
    log.debug('ready', { tag: client.user.tag });
    log.info(`Logged in as ${client.user.tag}`);
    if (presence) client.user.setPresence(presence);
}
