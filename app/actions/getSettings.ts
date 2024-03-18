'use server';

import { Bot } from '../lib/mongodb/models/botModel';
import { BotSettings } from '../lib/mongodb/models/settingsModel';
import { dbConnect } from '../lib/mongodb/mongodb';
import SettingsDto from '../lib/srz/serializedSettings';

export async function getFormSettingsDefaultData(
    botId: string
    // pathname: string
) {
    try {
        if (!botId) {
            throw new Error('Missing data');
        }

        await dbConnect();

        const activeBot = await Bot.findOne({
            botId,
        });

        if (!activeBot) {
            throw new Error('Bots not found');
        }

        const botSettings = await BotSettings.findOne({
            botId: activeBot.botId,
        });

        const serializedSettings = new SettingsDto(botSettings);
        serializedSettings.botId = botId;

        return serializedSettings;
    } catch (error: any) {
        // console.log(error.message);

        return error.message;
    }
}
