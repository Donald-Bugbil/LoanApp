// src/screens/HomeScreen/index.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';

const MenuItem = ({ icon, title, description, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuDescription}>{description}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      icon: <Ionicons name="cash-outline" size={24} color="#000" />,
      title: "New Loan",
      description: "Apply for a loan in minutes with our easy, secure, and personalized financing options",
      onPress: () => navigation.navigate('Eligibility')
    },
    {
      icon: <Ionicons name="card-outline" size={24} color="#000" />,
      title: "Active Loan",
      description: "Your loan dashboard - track your progress and make payments with ease",
      onPress: () => {}
    },
    {
      icon: <Ionicons name="information-circle-outline" size={24} color="#000" />,
      title: "Account Maintenance",
      description: "Account Insights: See your account activity and summary",
      onPress: () => {}
    }
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <View style={styles.helpContent}>
              <Ionicons name="headset-outline" size={20} color="#666" />
              <Text style={styles.helpText}>Need help?</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <ScrollView style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onPress={item.onPress}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helpButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  helpText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 6,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  menuDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

export default HomeScreen;