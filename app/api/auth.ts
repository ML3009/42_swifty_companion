import { AccessType } from "../types/access"

let token: AccessType | null = null;

export const getAuthToken = async (UID: string, SECRET: string): Promise <AccessType | null> => {
    if (token) {
        return token;
    }
    const authUrl = "https://api.intra.42.fr/oauth/token";
    const response = await fetch(authUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: UID,
            client_secret: SECRET
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    token = await response.json();
    return token;
}