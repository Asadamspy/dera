import React from 'react';
import { View, Text, Animated, Easing, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonAnimation = () => {
  const scale = new Animated.Value(1);

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity style={styles.button} onPress={animateButton}>
          <Text style={styles.buttonText}>Animate Button</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonAnimation;
