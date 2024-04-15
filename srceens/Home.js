import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/Features/searchBar'
import MechanicList from './MechanicList';
import BottomBar from '../components/Layout/BottomBar';

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text);
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/car.jpg')} style={styles.img}></Image>
                <View style={styles.searchAndListContainer}>
                    <SearchBar onSearch={handleSearch} style={styles.search} />
                    <MechanicList searchText={searchText} />
                </View>

            </View>
            <BottomBar navigation={navigation} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1
    },
    img: {
        width: '100%',
        height: '20%',
        marginBottom: 10
    },
    searchAndListContainer: {
        marginTop: 10, // Adjust this value to reduce space between SearchBar and MechanicList
    },

    search: {

        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
    },

})
export default Home;
