import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import TimerCountDownDisplay from './componants/TimerCountDownDisplay';
import ButtonElement from './componants/ButtonComponant';

const FOCUS_TIME_MINUTES = 0.2 *60 *1000
const BREAK_TIME_MINUTES = 0.2 *60 *1000

export default function App() {

  const [timerCount , setTimerCount] = useState<number>(0)
  const [timeInterval , setTimeInterval] = useState<NodeJS.Timer | null>(null)
  const [isTimerOn , setIsTimerOn] = useState(false);
  const [mode , setMode] = useState<"Focus" | "Break">("Focus")
  const calculatedTime  = 0

  const startTimer = ()=>{
    console.log('timer started')
    setMode("Break");
    setIsTimerOn(true);
  const id =  setInterval(()=>{
      setTimerCount((prev) => prev + 1000) , 1000
    })

    setTimeInterval(id);
    // calculatedTime =  id.ref()

  }

  const stopTimer = ()=> {
    console.log('timer stoped')
    setMode("Focus");
    setIsTimerOn(false);
    if(timeInterval != null){
      clearInterval(timeInterval);
    }
  }

  // const changeTimerState = () => {
  //   if(isTimerOn){
  //     stopTimer();
  //   }else{
  //     startTimer()
  //   }
  // }

  const resetTimer = () =>{
      setTimerCount(0);
  }

  const timerDate = new Date(timerCount)
  return (
    <ImageBackground source={require('./assets/background.png')}
    style={styles.backgroundImage}>
 <View style={{...styles.overlay , ...{backgroundColor : mode === "Focus" ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,1)' }}}>
      <StatusBar style="auto" />
      <Text style={styles.modeStyle}>{mode} {mode === "Focus" ? "🍇" : "🥐"}</Text>
      {/* <Button title='press to Start ' onPress={()=>{startTimer()}}></Button> */}
      {/* <Button title={isTimerOn ? 'stop Timer' : 'start Timer '} onPress={()=>  isTimerOn ? stopTimer() : startTimer()
      }></Button> */}
      <ButtonElement onStart={()=>startTimer() } onStop={()=> stopTimer()} isTimerOn={isTimerOn} />
      <TimerCountDownDisplay countDownDate={timerDate}/>
      <Button color={'white'} title='press to reset ' onPress={()=>{
        resetTimer()
      }}></Button>


    </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeStyle : {
    fontSize : 20
  },  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeStyle : {
    color : 'white', 
    fontSize : 30
  }
});


// ()=>{stopTimer()}
// resetTimer()