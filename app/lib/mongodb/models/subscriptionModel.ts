import { InferSchemaType, Schema, model, models } from 'mongoose';

const SubscriptionSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        expirationTime: { type: Date, required: true },
    },
    { timestamps: true }
);

export type SubscriptionSchema = InferSchemaType<typeof SubscriptionSchema>;
export const Subscription =
    models.subscription || model('subscription', SubscriptionSchema);
