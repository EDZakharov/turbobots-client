import { InferSchemaType, Schema, model, models } from 'mongoose';

const BotSettingsSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        targetProfitPercent: {
            type: String,
            required: true,
        },
        startOrderVolumeUSDT: { type: String, required: true },
        insuranceOrderVolumeUSDT: { type: String, required: true },
        insuranceOrderSteps: { type: String, required: true },
        insuranceOrderVolumeMultiplier: { type: String, required: true },
        insuranceOrderStepsMultiplier: { type: String, required: true },
        insuranceOrderPriceDeviationPercent: { type: String, required: true },
    },
    { timestamps: true }
);

export type BotSettings = InferSchemaType<typeof BotSettingsSchema>;
export const BotSettings =
    models.settings || model('settings', BotSettingsSchema);
