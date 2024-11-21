import { View, Text, Image, ScrollView } from "react-native";
import { UserType } from "../types/users"

function UserInfos({ userData }: { userData: UserType[] }) {
    console.log("userData", userData);

    if (!userData) {
        return <Text>No user data available</Text>;
    }

    const user = userData[0];

    return (
        <ScrollView style={{ padding: 20 }}>
            <View>
                <Image source={{ uri: user.image.link }} style={{ width: 100, height: 100 }} />
                <Text>ID: {user.id}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Login: {user.login}</Text>
                <Text>First Name: {user.first_name}</Text>
                <Text>Last Name: {user.last_name}</Text>
                <Text>Display Name: {user.displayname}</Text>
                <Text>Phone: {user.phone}</Text>
                <Text>Kind: {user.kind}</Text>
                <Text>Pool Month: {user.pool_month}</Text>
                <Text>Pool Year: {user.pool_year}</Text>
                <Text>Wallet: {user.wallet}</Text>
                <Text>Correction Point: {user.correction_point}</Text>
                <Text>Created At: {user.created_at}</Text>
                <Text>Updated At: {user.updated_at}</Text>
                <Text>URL: {user.url}</Text>
            </View>
        </ScrollView>
    );
}

export default UserInfos;