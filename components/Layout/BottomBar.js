import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BottomBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/home.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate("Tools") }}>
                <Image source={require('../../assets/tools.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/menu.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Vehicle") }}>
                <Image source={require('../../assets/vehicle.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Profile") }}>
                <Image source={require('../../assets/account.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
});


export default BottomBar;
