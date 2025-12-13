import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Rectangle() {

    const router = useRouter()


    const [area, setArea] = useState(0)
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    function rectangleCal() {
        var result = width * length
        setArea(result)
    }


    return (

        <View style={styles.box}>

            <Text style={styles.textTitle}>คำนวนพื้นที่สี่เหลื่ยม</Text>
            {/* <Button title="next page"></Button> */}

            <Text>ความกว้าง คือ {width} ซม.</Text>
            <Text>ความยาว คือ {length} ซม.</Text>
            <Text>พื้นที่สี่เหลี่ยมคือ คือ {area} ตร.ซม.</Text>

            <TextInput style={styles.textInput}
                placeholder="ความกว้าง"
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w))} />


            <TextInput style={styles.textInput}
                placeholder="ความยาว"
                value={length.toString()}
                onChangeText={(l) => setLength(Number(l))} />


            <Button title="คำนวน" onPress={() => rectangleCal()} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 5 }}>
                    <Button title="Home" onPress={() => router.navigate('/')} />
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
        alignItems: "center",
        gap: 10
    },


    textTitle: {
        fontSize: 22,
        fontWeight: "700"
    },

    textInput: {
        borderWidth: 5,
        borderColor: "white",
        width: "80%",
        height: 50,

    }
})

