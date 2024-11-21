import { useState, useEffect } from "react"
import { View, Text, Button, TextInput, FlatList} from "react-native"
import UserInfos from "./userInfos"


function Login() {

    const [login, setLogin] = useState<string>("")
    const [token, setToken] = useState<string>("")
    const [userData, setUserData] = useState<any>(null)

    const handleButtonLogin = async () => {
        console.log(login);
        const UID = "blabla"
        const SECRET = "blabla"
        const authUrl = "https://api.intra.42.fr/oauth/token";

        try {
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
            const data = await response.json();
            setToken(data.access_token)

            const userResponse = await fetch(`https://api.intra.42.fr/v2/users?filter[login]=${login}`, {
                method: 'GET',
                headers: {
                     'Authorization': `Bearer ${data.access_token}`
                }
            });

            if (!userResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await userResponse.json();
            setUserData(userData)
            console.log(userData)

         
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

    
    }

    const handleInputLogin = (text: string) => {
        setLogin(text);
    }

    

    return (
        <>
            <TextInput
                placeholder="Enter your login"
                onChangeText={handleInputLogin}
                value={login}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
            />
            <Button title="login" onPress={handleButtonLogin} />
            {token ? <Text>Acess Token: {token} </Text> : null } 
            {userData ? 
            
            (
               <UserInfos userData={userData}/>
            )
            
            : (null)}
        </>
    )


}

export default Login;