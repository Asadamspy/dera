import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext'; // Using Theme Context

const HomeScreen = () => {
  const { isDarkMode } = useTheme(); // Only reading dark mode, no toggleTheme
  const theme = isDarkMode ? styles.dark : styles.light;

  return (
    <ScrollView contentContainerStyle={[theme.container]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[theme.title]}>Welcome to Your Dashboard</Text>
      </View>

      {/* Action Cards */}
      <View style={styles.buttonContainer}>
        {/* Go to Projects */}
        <TouchableOpacity style={[theme.button, styles.button]} onPress={() => console.log('Navigate to Projects')}>
          <FontAwesome5 name="project-diagram" size={20} color="#fff" />
          <Text style={theme.buttonText}>Go to Projects</Text>
        </TouchableOpacity>

        {/* Manage Teams */}
        <TouchableOpacity style={[theme.button, styles.button]} onPress={() => console.log('Navigate to Teams')}>
          <MaterialIcons name="group-work" size={24} color="#fff" />
          <Text style={theme.buttonText}>Manage Teams</Text>
        </TouchableOpacity>

        {/* View Tasks */}
        <TouchableOpacity style={[theme.button, styles.button]} onPress={() => console.log('Navigate to Tasks')}>
          <Ionicons name="ios-checkmark-done-circle" size={24} color="#fff" />
          <Text style={theme.buttonText}>View Tasks</Text>
        </TouchableOpacity>

        {/* Check Messages */}
        <TouchableOpacity style={[theme.button, styles.button]} onPress={() => console.log('Navigate to Messages')}>
          <Entypo name="message" size={24} color="#fff" />
          <Text style={theme.buttonText}>Check Messages</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  light: {
    container: {
      flexGrow: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#3498db',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '600',
      marginLeft: 15,
    },
  },
  dark: {
    container: {
      flexGrow: 1,
      backgroundColor: '#2c3e50',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ecf0f1',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#2980b9',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '600',
      marginLeft: 15,
    },
  },
  buttonContainer: {
    marginTop: 10,
  },
  header: {
    marginBottom: 20,
  },
});

export default HomeScreen;
