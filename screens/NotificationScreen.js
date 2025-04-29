import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNotification } from '../context/NotificationContext'; // Import notification context

const NotificationScreen = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? styles.dark : styles.light;

  const { addNotification, clearNotifications } = useNotification(); // use notification

  const [notifications, setNotifications] = useState([
    { id: '1', notification: { title: 'New Update', body: 'Version 2.0 is now available!' } },
    { id: '2', notification: { title: 'Maintenance Alert', body: 'Scheduled maintenance at 2 AM tomorrow.' } },
    { id: '3', notification: { title: 'Reminder', body: 'Don\'t forget to complete your task today!' } },
  ]);

  const handleNotification = (notification) => {
    const { title, body } = notification?.notification || {};
    Alert.alert(title || 'New Notification', body || 'You have a new message.');

    setNotifications((prev) => [...prev, notification]);
    addNotification(); // <-- ADD this to update badge
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotification = { id: Date.now().toString(), notification: { title: 'New Message', body: 'You have a new message in your inbox.' } };
      handleNotification(newNotification);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    clearNotifications(); // Clear badge when user enters notification screen
  }, []);

  const renderItem = ({ item }) => {
    const { title, body } = item.notification || {};
    return (
      <View style={[theme.notificationCard]}>
        <Text style={theme.notificationTitle}>{title}</Text>
        <Text style={theme.notificationBody}>{body}</Text>
      </View>
    );
  };

  return (
    <View style={theme.container}>
      <Text style={theme.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={theme.emptyText}>No notifications yet.</Text>}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  light: {
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: 20,
    },
    notificationCard: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    notificationTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#2c3e50',
    },
    notificationBody: {
      fontSize: 14,
      color: '#2c3e50',
      marginTop: 5,
    },
    emptyText: {
      fontSize: 16,
      color: '#2c3e50',
      textAlign: 'center',
      marginTop: 20,
    },
  },
  dark: {
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ecf0f1',
      marginBottom: 20,
    },
    notificationCard: {
      backgroundColor: '#34495e',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#555',
    },
    notificationTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ecf0f1',
    },
    notificationBody: {
      fontSize: 14,
      color: '#bdc3c7',
      marginTop: 5,
    },
    emptyText: {
      fontSize: 16,
      color: '#bdc3c7',
      textAlign: 'center',
      marginTop: 20,
    },
  },
});

export default NotificationScreen;
