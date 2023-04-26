import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {FontAwesome} from '@expo/vector-icons'


type Props = {
  title?: string;
  onStart: () => void;
  onStop: () => void;
  isTimerOn: boolean;
};

const ButtonElement: React.FC<Props> = ({ onStart, onStop, isTimerOn }) => {
  return (
      <Pressable onPress={() => (isTimerOn ? onStop() : onStart())}>
    <View style={styles.container}>
<FontAwesome style={styles.icon} name={isTimerOn ? "pause" : "play"} size={125} color={'blue'} />
        {/* <Button title={isTimerOn ? "stop Timer" : "start Timer "} onPress={() => (isTimerOn ? onStop() : onStart())} /> */}
    </View>

      </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        borderColor: "#fff",
        marginVertical: 50,
      },
      icon: { alignSelf: "center"  , color : 'white'},
    
})

export default ButtonElement;
