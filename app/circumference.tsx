import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Circumference() {
const router = useRouter()


const [circumference, setCircumference] = useState(0)
    const [radius, setRadius] = useState(0)
    
    

    function circumferenceCal (){
        var result = 2 * 3.14 * radius
        setCircumference(result)
    }


    return (

        <View style={styles.box}>

            <Text style={styles.textTitle} >คำนวนเส้นรอบวงกลม</Text>
            {/* <Button title="next page"></Button> */}
            <Text>สูตร = 2 * 3.14 * radius</Text>
            <Text>ค่าพาย คือ 3.14 เซนติเมตร</Text>
            <Text>รัศมี คือ {radius} เซนติเมตร</Text>
            <Text>เส้นรอบวงกลม คือ {circumference} เซนติเมตร</Text>
            

            <TextInput style={styles.textInput} 
            placeholder="ความยาวรัศมี" 
            value={radius.toString()} 
            onChangeText={(r) => setRadius(Number(r))} />


            


            <Button title="คำนวน" onPress={() => circumferenceCal()}/>

        <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 5 }}>
                    <Button title="Home" onPress={() => router.navigate('/')} />
                </View>
                <Button title="คำนวนพื้นที่สามเหลี่ยม" onPress={() => router.navigate('/rectangle')} />
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

