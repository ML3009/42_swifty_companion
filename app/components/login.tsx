import React, { useState, useEffect } from "react"
import { Button, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import { UserType } from "../types/users"
import { getAuthToken } from "../api/auth"
import { getUserData } from "../api/user"
import {  useRouter } from "expo-router";

function Login() {
    
    const router = useRouter();
    const [login, setLogin] = useState<string>("")
    const [token, setToken] = useState<string>("")
    const [userData, setUserData] = useState<UserType>()

    const handleButtonLogin = async () => {
        try {
            const data = await getAuthToken(process.env.EXPO_PUBLIC_UID, process.env.EXPO_PUBLIC_SECRET);
            if(!data) {
                throw new Error('There is no data');
            }
            setToken(data.access_token);
            const userData  = await getUserData(login, data.access_token);
            setUserData(userData);
            router.push({ pathname: '/details', params: { userInfo: JSON.stringify(userData) } })
        } catch (error) {
            router.push({ pathname: '/+not-found', params: {} })
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
                style={styles.text}
            />
            <TouchableOpacity
                style={styles.button}>
                <Button title="login" onPress={handleButtonLogin} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({  
    text: {
      fontSize: 20,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      color: 'dimgrey',
    },
    button: {
        height: 40,
        width:160,
        borderRadius:10,
        marginLeft :50,
        marginRight:50,
        marginTop :20
    }
  });

export default Login;
