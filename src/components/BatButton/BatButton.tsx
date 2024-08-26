import React, { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import GeneratePass from '../../services/passwordService';

export function BatButton() {

    const [pass, setPass] = useState('')

    function handleGeneratorButton() {
        let generteToken = GeneratePass()
        setPass(generteToken)
    }
    function handleButtonCopy() {
        Clipboard.setStringAsync(pass)
    }
    return (
        <>
            <BatTextInput pass={pass} />

            <Pressable
                style={styles.button}
                onPress={handleGeneratorButton}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleButtonCopy}
            >
                <Text style={styles.text}>⚡COPY</Text>
            </Pressable>
        </>
    );
}