import { InferSchemaType, Schema, model, models } from 'mongoose';

const CoinSchema = new Schema({
    symbol: { type: String, unique: true, required: true },
});

export type CoinsSchema = InferSchemaType<typeof CoinSchema>;
export const Coin = models.coins || model('coins', CoinSchema);
