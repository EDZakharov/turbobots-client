//@ts-nocheck
import mongoose from 'mongoose';

interface ConnectionProps {
    isConnected: boolean;
}

const connected: ConnectionProps = {
    isConnected: false,
};

export async function dbConnect() {
    if (connected.isConnected) {
        // console.log('already connected');
        return;
    }

    if (mongoose.connections.length > 0) {
        connected.isConnected = mongoose.connections[0].readyState === 1;
        if (connected.isConnected) {
            // console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }

    try {
        const db = await mongoose.connect(process.env.DB_URL);
        // console.log('new connection');
        connected.isConnected = db.connections[0].readyState === 1;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
