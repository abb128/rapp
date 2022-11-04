
import { StatusBar } from 'expo-status-bar';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import React, { useRef, useMemo, useEffect } from "react";
import colors from './src/constants/colors';
import ChatList from './src/screens/ChatList';
import SideBar from './src/screens/SideBar';



const SIDE_SIZE = 400.0;

export default function App() {
  const pan = useRef(new Animated.ValueXY(0.0)).current;

  const releasePan = (_, e) => {
    pan.flattenOffset();

    let tgt = 0.0;
    const delta = pan.x._value + e.vx * (SIDE_SIZE/2.0);
    if(delta >= SIDE_SIZE){
      tgt = SIDE_SIZE;
    }else if(delta <= -SIDE_SIZE) {
      tgt = -SIDE_SIZE;
    }

    pan.setOffset({ x: tgt, y: 0.0 });
    pan.setValue({ x: pan.x._value - tgt, y: 0.0 });

    Animated.spring(
      pan,
      {
        toValue: { x: 0.0, y: 0.0 },
        useNativeDriver: false,
        bounciness: 2,
      }
    ).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x },
        ],
        { useNativeDriver: false }
      ),
      
      onPanResponderRelease: releasePan,
      onPanResponderTerminate: releasePan,
    })
  ).current;

  //
  return (
    <View style={styles.container}>
      <View style={styles.leftSideContainer}>
        <SideBar />
      </View>
      <Animated.View style={[ styles.chatContainer, {transform: [{translateX: pan.x}]}]}  {...panResponder.panHandlers}>
        <ChatList />
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: "100%",
    height: "100%",
    backgroundColor: colors.blackBg,
  },

  chatContainer: {
    backgroundColor: colors.blackBg,
    zIndex: 5,
    flex: 1,

    position: 'absolute',
    width: "100%",
    height: "100%",

    marginTop: StatusBar.currentHeight || 0
  },

  leftSideContainer: {
    backgroundColor: colors.blackBg,
    zIndex: 4,
    flex: 1,

    position: 'absolute',
    width: "100%",
    height: "100%",

    marginTop: StatusBar.currentHeight || 0
  }
});

