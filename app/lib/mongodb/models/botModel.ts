import { InferSchemaType, Schema, Types, model, models } from 'mongoose';

const BotsSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        active: { type: Boolean, enum: [true, false] },
        botName: { type: String, required: true },
        expirationTime: { type: Date },
        deletionTime: { type: Date },
        isFrozen: { type: Boolean, default: false },
        freezeTime: { type: Date },
        coins: [{ type: String }],
    },
    { timestamps: true }
);

BotsSchema.pre('save', function (next) {
    if (this.isNew) {
        this.active = false;
    }
    next();
});

export type BotsSchemaType = InferSchemaType<typeof BotsSchema>; // Извлечение типа схемы
export type ObjectId = Types.ObjectId;
export const Bots = models.bots || model('bots', BotsSchema);
