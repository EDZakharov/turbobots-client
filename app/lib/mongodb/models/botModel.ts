import { InferSchemaType, Schema, Types, model, models } from 'mongoose';

const BotSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        botId: { type: Schema.Types.ObjectId, required: true },
    },
    { timestamps: true }
);

export type BotSchema = InferSchemaType<typeof BotSchema>;
export type ObjectId = Types.ObjectId;
export const Bot = models.bots || model('bots', BotSchema);
