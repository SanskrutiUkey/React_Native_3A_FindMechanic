import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ToolsList = () => {
    const tools = [
        { id: 1, name: 'Tool 1', price: '$10', image: require('../assets/helmet.jpg') },
        { id: 2, name: 'Tool 2', price: '$20', image: require('../assets/mirror.jpg') },
        { id: 3, name: 'Tool 3', price: '$15', image: require('../assets/tire.jpg') },
        { id: 4, name: 'Tool 4', price: '$20', image: require('../assets/tire.jpg') },


    ];


    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );

    return (
        <FlatList
            data={tools}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Display items in 2 columns
            contentContainerStyle={styles.container}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#E6A7A0',
        borderRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
});

export default ToolsList;

