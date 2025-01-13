import { Text, View } from "react-native";
import Cat from "@/components/cat";
import InputComponent from "@/components/input";
import Login from "@/components/login"

export default function Index() {
	return (
	<View
		style={{
			flex:1,
			padding: 20,
			alignItems: "center",
			backgroundColor: "darksalmon",
		}}
	>
		<View 
			 style={{    
				marginBlockStart: 40,  
			 }}>
			<Text
				style={{
					fontFamily: "Verdana",
					color: "white",
					fontWeight: "bold"
					
				}}>
					Welcome to swifty companion app 👋  
			</Text>
			<Login />
		</View>
	</View>
	
	);
}