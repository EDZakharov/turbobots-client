import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSettingsData() {
    noStore();
    try {
        const data = await fetch(`http://localhost:5000/api/users/get-users`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        return data.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}
