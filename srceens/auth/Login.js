import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View className="w-full h-full flex pt-20 pb-10">
            <View className="flex items-center">
                <Text className="text-red-400 font-bold text-5xl">Login</Text>
            </View>

            <View className="flex items-center mx-4 my-10 space-y-4">
                <View className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Email' placeholderTextColor={'gray'}></TextInput>
                </View>

                <View className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry></TextInput>
                </View>

            </View>
            <View className="flex items-center my-6 mx-10">

                <Button
                    title="Login"
                    color="#F34C56"
                    onPress={() => { navigation.navigate("Home") }} />
            </View>

            <View className="flex flex-row items-center my-6 mx-10">
                <Text className="text-xl">Don't have an account ? </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Register") }}
                ><Text className="text-red-400 text-xl"> Register</Text></TouchableOpacity>

            </View>
        </View>
    );
}

export default Login;
