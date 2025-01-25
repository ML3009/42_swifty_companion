import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { UserType } from "../types/users"
import { RootStackParamList } from "../types/route";
import UserInfos from "@/components/userInfos"

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};
export default function Details({ route }: Props) {

    const userData: UserType = route.params.userInfo
    
    console.log(userData)
  
    return (
        <UserInfos userData={userData} />
    )
}