import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, StatusBar } from 'react-native';


const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/starting_page_image.jpeg')} style={styles.image}>
                <Text style={styles.heading}>
                    3A FindMechanic
                </Text>
                <Text style={styles.subheading}>
                    Anytime, Anywhere, Affordable
                </Text>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn}
                        title="Lets Get Started"
                        color="#F34C56"
                        onPress={() => { navigation.navigate("Login") }}
                    />
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        resizeMode: 'cover',
        height: '100%',
        width: '100%'

    },
    btnContainer: {
        position: 'absolute',
        bottom: '16%',
        left: '10%',
        width: 150,
        height: 50
    },
    heading: {
        position: 'absolute',
        top: '26%',
        left: '18%',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
    subheading: {
        position: 'absolute',
        top: '32%',
        left: '18%',
        color: 'white',
        fontSize: 20
    }
});


export default Welcome;
