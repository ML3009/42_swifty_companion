import { UserType } from "../types/users";

export const getUserData = async (login: string, token: string): Promise<UserType> => {
    const userResponse = await fetch(`https://api.intra.42.fr/v2/users/${login}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!userResponse.ok) {
        throw new Error('Network response was not ok');
    }

    return userResponse.json();
};