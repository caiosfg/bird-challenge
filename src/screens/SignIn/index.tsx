import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export function SignIn() {

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text>Bird Challenge, seu contador de cantos.</Text>
            <Text>
                Seja Bem-vindo: {text}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
            />
        </View>
    );
}