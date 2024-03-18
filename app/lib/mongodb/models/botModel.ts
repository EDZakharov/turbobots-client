import { InferSchemaType, Schema, Types, model, models } from 'mongoose';

const BotsSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        botName: { type: String, required: true },
        expirationTime: { type: Date },
        deletionTime: { type: Date },
        isFrozen: { type: Boolean, default: false },
        freezeTime: { type: Date },
        coins: [{ type: String }],
    },
    { timestamps: true }
);

export type BotsSchema = InferSchemaType<typeof BotsSchema>;
export type ObjectId = Types.ObjectId;
export const Bots = models.bots || model('bots', BotsSchema);
