
import { useRouter } from "expo-router";
import { View , Text , Button , StyleSheet } from "react-native";

export default function App(){
    const router = useRouter()
    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>Home</Text>
            <Button title="next page" onPress={() => router.navigate('/rectangle') } />
        </View>
    )

}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700"
    }
}) 

