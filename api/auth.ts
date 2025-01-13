import { AccessType } from "../types/access"

export const getAuthToken = async (UID: string, SECRET: string): Promise <AccessType> => {
    const authUrl = "https://api.intra.42.fr/oauth/token";
    console.log("UID ", UID)
    console.log("SECret", SECRET)
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

    return response.json();
}