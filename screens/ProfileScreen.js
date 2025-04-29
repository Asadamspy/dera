import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Theme context
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? styles.dark : styles.light;

  return (
    <ScrollView contentContainerStyle={[theme.container]}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} 
          style={styles.avatar} 
        />
        <Text style={[theme.name]}>John Doe</Text>
        <Text style={[theme.bio]}>Frontend Developer | React Native Enthusiast</Text>
      </View>

      {/* Contact Info */}
      <View style={styles.contactContainer}>
        <MaterialIcons name="email" size={20} color={isDarkMode ? '#ecf0f1' : '#2c3e50'} />
        <Text style={[theme.contactText]}>john.doe@example.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <TouchableOpacity style={[theme.card]}>
          <FontAwesome5 name="project-diagram" size={28} color="#3498db" />
          <Text style={[theme.statNumber]}>12</Text>
          <Text style={[theme.statLabel]}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[theme.card]}>
          <Ionicons name="ios-checkmark-done-circle" size={28} color="#27ae60" />
          <Text style={[theme.statNumber]}>34</Text>
          <Text style={[theme.statLabel]}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[theme.card]}>
          <MaterialIcons name="message" size={28} color="#f39c12" />
          <Text style={[theme.statNumber]}>7</Text>
          <Text style={[theme.statLabel]}>Messages</Text>
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
      alignItems: 'center',
      padding: 20,
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginTop: 10,
    },
    bio: {
      fontSize: 16,
      color: '#7f8c8d',
      marginTop: 5,
    },
    contactText: {
      fontSize: 16,
      color: '#2c3e50',
      marginLeft: 10,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      margin: 10,
      elevation: 5,
    },
    statNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
      color: '#2c3e50',
    },
    statLabel: {
      fontSize: 14,
      color: '#7f8c8d',
    },
  },
  dark: {
    container: {
      flexGrow: 1,
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      padding: 20,
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#ecf0f1',
      marginTop: 10,
    },
    bio: {
      fontSize: 16,
      color: '#bdc3c7',
      marginTop: 5,
    },
    contactText: {
      fontSize: 16,
      color: '#ecf0f1',
      marginLeft: 10,
    },
    card: {
      backgroundColor: '#34495e',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      margin: 10,
      elevation: 5,
    },
    statNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
      color: '#ecf0f1',
    },
    statLabel: {
      fontSize: 14,
      color: '#bdc3c7',
    },
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default ProfileScreen;
