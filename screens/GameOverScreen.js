import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOver = props => {
    return (<View style={styles.screen}>
        <Text>The Game is Over!</Text>
        <Text>Number of Rounds:{props.Round}</Text>
        <Button style={styles.button} title="Start New Game!" onPress={props.onNewGameStart} />
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    },
    button:{
        marginTop:20
    }
})

export default GameOver;
