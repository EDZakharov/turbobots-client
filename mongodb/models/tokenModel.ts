import { InferSchemaType, Schema, model, models } from 'mongoose';

const TokenSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    refreshToken: { type: String, required: true },
});
export type UserToken = InferSchemaType<typeof TokenSchema>;
export const TokenModel = models.tokens || model('tokens', TokenSchema);
