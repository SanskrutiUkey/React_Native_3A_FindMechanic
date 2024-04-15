import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

const searchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        // Call the onSearch prop with the search text
        onSearch(text);
    };


    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
                placeholder="Search..."
                onChangeText={handleSearch}
                value={searchText}
            />
        </View>
    );
}

export default searchBar;
