#!/usr/bin/env node
import 'dotenv/config';
import { log, fs, path, pathUrl, registerHandlers, registerSignals } from '@purinton/common';
import { createDiscord } from '@purinton/discord';

registerHandlers({ log });
registerSignals({ log });

const name = 'discord-template';
const packageJson = JSON.parse(fs.readFileSync(path(import.meta, 'package.json')), 'utf8');
const version = packageJson.version;

(async () => {
    const client = await createDiscord({
        log,
        rootDir: path(import.meta),
        intents: {
            Guilds: true,
            GuildMessages: true,
            MessageContent: true,
        },
        context: {
            presence: { activities: [{ name: `${name} v${version}`, type: 4 }], status: 'online' },
        },
    });
    registerSignals({
        shutdownHook: async () => {
            await client.destroy();
        }
    });
})();
