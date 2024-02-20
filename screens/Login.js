import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { getAuth, signInWithEmailAndPassword } from '../firebase/Config';

export default function Login({setLogin}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const auth = getAuth()
        
        signInWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
            console.log (userCredential.user)
            setLogin(true)
        }).catch((error) =>{
            if (error.code === 'auth/wrong-password' || error.code ==='auth/user-not-found') {
                console.log('Invalid credentials')
            } else if ((error.code ==='auth/too-many-requests')){
                console.log('Too many attempts to login')
            } else{
                console.log(error.code + ' ' + error.message)
            }
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={setUserName}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button
                title="Login"
                onPress={login}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
});
