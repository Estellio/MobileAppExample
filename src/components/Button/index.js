import React from "react";
import {TouchableOpacity, Text} from "react-native";

import {styles} from "./styles";

const Button = ({title, onPress}) => {
    const handlePress = () => {
        console.log('button is klicked')
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button