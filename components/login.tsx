import { useState, useEffect } from "react"
import { View, Text, Button, TextInput, FlatList} from "react-native"
import UserInfos from "./userInfos"
import { UserType } from "../types/users"
import { getAuthToken } from "../api/auth"
import { getUserData } from "../api/user"


function Login() {

    const [login, setLogin] = useState<string>("")
    const [token, setToken] = useState<string>("")
    const [userData, setUserData] = useState<UserType[]>()

    const handleButtonLogin = async () => {
        console.log(login);
        try {
            const data = await getAuthToken(process.env.UID, process.env.SECRET);
            setToken(data.access_token);
    
            const userData = await getUserData(login, data.access_token);
            setUserData(userData);
            console.log(userData);

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
            {userData ? 
            
            (
               <UserInfos userData={userData}/>
            )
            
            : (null)}
        </>
    )


}

export default Login;