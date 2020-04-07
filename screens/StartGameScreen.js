import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/color';
import NumberContainer from '../components/NumberContainer';

const StartGame = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isConfirmed, setConfirm] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resethandler = () => {
        setEnteredValue('');
    }
    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
            Alert.alert("Invalid Input!","Number must be between 1 to 99",[{text:'Okay',style:'destructive', onPress:resethandler}])
            return;
        }
        setConfirm(true);
        setEnteredValue('');
        setSelectedValue(parseInt(enteredValue));
    }

    let confirmedOutput;

    if (isConfirmed) {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedValue}</NumberContainer>
            <Button title="Start Game" onPress={() => props.onStartGame(selectedValue)} />
        </Card>
    }
 

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={handleChange}

                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resethandler} color={Colors.secondary} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 80,
        textAlign: 'center'
    },
    summaryContainer:
    {
        alignItems:'center',
        marginTop:20
    }

});

export default StartGame;