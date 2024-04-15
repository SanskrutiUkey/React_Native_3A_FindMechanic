import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Register = () => {
    return (
        <View className="w-full h-full flex pt-20 pb-10">
            <View className="flex items-center">
                <Text className="text-red-400 font-bold text-5xl">Register</Text>
            </View>

            <View className="flex items-center mx-4 my-10 space-y-4">
                <View className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Username' placeholderTextColor={'gray'}></TextInput>
                </View>

                <View className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Email' placeholderTextColor={'gray'}></TextInput>
                </View>

                <View className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry></TextInput>
                </View>

            </View>
            <View className="flex items-center my-6 justify-content">

                <Button
                    title="Register"
                    color="#F34C56"

                />
            </View>
        </View>
    );
}

export default Register;
