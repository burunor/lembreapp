import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from "../config/colors";

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius:25,
        width: '100%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.button,
        marginVertical: 5,
        elevation: 10,
        // For IOS
        shadowColor: "grey",
        shadowOffset:{ width:0, height:10 },
        shadowOpacity: 10,
    },
    text: {
        color: colors.secondary,
        fontSize: 18,
        paddingHorizontal:10,
        paddingVertical: 5,
    },
})

export default AppButton;