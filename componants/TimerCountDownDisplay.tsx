import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    countDownDate: Date;
  };
  
//   JSX.Element
const TimerCountDownDisplay :React.FC<Props> = ({countDownDate}) =>{
    return(
        <View>
            <Text style={styles.timeStyle}>{countDownDate.getMinutes().toString().padStart(2 ,"0")}:{countDownDate.getSeconds().toString().padStart(2 ,"0")}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    timeStyle : {
      fontSize : 40, 
      fontWeight : "800" ,
      color : 'white'
    }
  });

export default TimerCountDownDisplay;