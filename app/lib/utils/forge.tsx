import forge from 'node-forge';

export function encryptPayload(payload: any, publicKey: string): string {
    const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);

    const encryptedPayload = publicKeyObj.encrypt(
        JSON.stringify(payload),
        'RSA-OAEP',
        {
            md: forge.md.sha256.create(),
        }
    );
    return forge.util.encode64(encryptedPayload);
}

export function decryptPayload(
    encryptedPayload: string,
    privateKey: string
): any {
    try {
        const privateKeyObj = forge.pki.privateKeyFromPem(privateKey);

        const decryptedPayload = privateKeyObj.decrypt(
            forge.util.decode64(encryptedPayload),
            'RSA-OAEP',
            {
                md: forge.md.sha256.create(),
            }
        );
        return JSON.parse(decryptedPayload);
    } catch (error) {
        console.log(error);
        return null;
    }
}
