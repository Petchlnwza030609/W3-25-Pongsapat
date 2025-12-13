
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
    const router = useRouter()
    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>Home</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 5 }}>
                    <Button title="คำนวนพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/rectangle')} />
                </View>
                <Button title="คำนวนเส้นรอบวงกลม" onPress={() => router.navigate('/circumference')} />
            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"

    },
    textTitle: {
        fontSize: 22,
        fontWeight: "700"
    }
})

