import React from "react";
import {
    Text,
    View,
    Image
} from "react-native";
import Button from "../../../components/Button";
import {styles} from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="cnntain" style={styles.image} source={require('../../../assets/splash_image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign Up" />

            <Pressable>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}
export default Splash