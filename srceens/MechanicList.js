import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MechanicList = ({ searchText }) => {
    // const [list, setlist] = useState([]);
    const mechanics = [
        { name: 'ABC XYZ', location: 'Nagpur', image: require('../assets/account.png') },
        { name: 'DEF PQR', location: 'Mumbai', image: require('../assets/account.png') },
        { name: 'GHI JKL', location: 'Delhi', image: require('../assets/account.png') }
    ];

    const filteredMechanics = mechanics.filter(mechanic =>
        mechanic.name.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <View style={styles.container}>
            {filteredMechanics.map((mechanic, index) => (
                <View style={styles.itemContainer} key={index}>
                    <Image source={mechanic.image} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text>{mechanic.name}</Text>
                        <Text>{mechanic.location}</Text>
                    </View>
                </View>
            ))}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    mechanicList: {
        marginTop: 10, // Adjust this value to reduce space between SearchBar and MechanicList
    },
    itemContainer: {
        backgroundColor: '#E6A7A0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10, // Border radius
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Space between image and text
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20, // Half of the width and height to make it circular
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});



export default MechanicList;
