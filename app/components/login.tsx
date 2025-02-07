import React, { useState } from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View} from "react-native"
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
            if (login) {
                const userData  = await getUserData(login, data.access_token);
                setUserData(userData);
                router.push({ pathname: '/details', params: { userInfo: JSON.stringify(userData) } })
            }
        } catch (error) {
            router.push({ pathname: '/+not-found', params: {} })
        }
    }
    const handleInputLogin = (text: string) => {
        setLogin(text);
    }

    return (
        <View
            style={styles.loginContainer}>
            <TextInput
                placeholder="Enter a login"
                onChangeText={handleInputLogin}
                value={login}
                style={styles.text}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleButtonLogin}>
                <Text
                style={styles.buttonText}>Search profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({  
    loginContainer: {
        paddingTop: 0,
    },
    text: {
      fontSize: 20,
      height: 40,
      borderColor: 'black',
      borderWidth: 2,
      marginBottom: 20,
      borderRadius: 10,
      paddingHorizontal: 90,
      color: 'black',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black', 
        padding: 10,
        borderRadius: 10, 
        backgroundColor: 'darkkhaki',
        textAlign: 'center',
    },
    buttonText: {
        color:'#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default Login;
