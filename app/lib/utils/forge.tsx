import CryptoJS from 'crypto-js';

const key = process.env.PAYLOAD_KEY || '';

export async function encryptPayload(payload: any): Promise<string> {
    const encryptedPayload = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        key
    ).toString();
    return encryptedPayload;
}

export async function decryptPayload(encryptedPayload: string): Promise<any> {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedPayload, key);
    const decryptedPayload = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedPayload);
}
