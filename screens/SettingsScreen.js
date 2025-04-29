// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const theme = isDarkMode ? styles.dark : styles.light;

  return (
    <ScrollView contentContainerStyle={[theme.container]}>
      <Text style={[theme.title]}>Settings</Text>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={[theme.sectionTitle]}>Account</Text>
        <TouchableOpacity style={[theme.card]}>
          <Ionicons name="person-circle-outline" size={24} color="#3498db" />
          <Text style={[theme.cardText]}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[theme.card]}>
          <MaterialIcons name="security" size={24} color="#e67e22" />
          <Text style={[theme.cardText]}>Privacy & Security</Text>
        </TouchableOpacity>
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={[theme.sectionTitle]}>Preferences</Text>

        <View style={[theme.card, styles.switchRow]}>
          <FontAwesome5 name="moon" size={22} color="#9b59b6" />
          <Text style={[theme.cardText]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>

        <View style={[theme.card, styles.switchRow]}>
          <Ionicons name="notifications-outline" size={22} color="#27ae60" />
          <Text style={[theme.cardText]}>Notifications</Text>
          <Switch value={notificationsEnabled} onValueChange={() => setNotificationsEnabled(!notificationsEnabled)} />
        </View>
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <TouchableOpacity style={[theme.card, styles.logoutButton]}>
          <MaterialIcons name="logout" size={24} color="#e74c3c" />
          <Text style={[theme.cardText, { color: '#e74c3c' }]}>Logout</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  light: {
    container: {
      flexGrow: 1,
      backgroundColor: '#f5f5f6',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      elevation: 3,
    },
    cardText: {
      fontSize: 16,
      marginLeft: 10,
      flex: 1,
      color: '#2c3e50',
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
      textAlign: 'center',
      color: '#ecf0f1',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#ecf0f1',
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#34495e',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      elevation: 3,
    },
    cardText: {
      fontSize: 16,
      marginLeft: 10,
      flex: 1,
      color: '#ecf0f1',
    },
  },
  section: {
    marginVertical: 15,
  },
  switchRow: {
    alignItems: 'center',
  },
  logoutButton: {
    justifyContent: 'center',
  },
});

export default SettingsScreen;
