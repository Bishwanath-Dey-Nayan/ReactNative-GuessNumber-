import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessNumber, setGuessRounds] = useState(0);

  const gameOverHandler = numOfRounds =>
  {
    console.log("game over");
    setGuessRounds(numOfRounds);
  }

  const newGamehandler = () =>
  {
    setGuessRounds(0);
    setUserNumber(null);
  }
 
  console.log(guessNumber);
  const startGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }
  let content = <StartGame  onStartGame = {startGameHandler}/>;
  if(userNumber && guessNumber <= 0)
  {
    content = <GameScreen  userChoice={userNumber} onGameOver = {gameOverHandler} />
  }
  else if(guessNumber >0){
      content = <GameOver onNewGameStart = {newGamehandler} Round={guessNumber}/>
  }
  return (
    <View style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
    </View>

  );
}

const styles = StyleSheet.create({
screen:{
  flex:1,
  alignItems:'center',

}
});
