// src/screens/SuccessScreen/index.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  StatusBar,
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => navigation.navigate('Home')}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <View style={styles.helpContent}>
              <Ionicons name="headset-outline" size={20} color="#666" />
              <Text style={styles.helpText}>Need help?</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.successContent}>
          <Text style={styles.title}>Loan Application Successful</Text>
          
          <View style={styles.walletIconContainer}>
            <View style={styles.walletCircle}>
              <Ionicons name="wallet-outline" size={40} color="#1a365d" />
            </View>
          </View>
          
          <Text style={styles.successText}>
            Once your loan with ID: <Text style={styles.boldText}>2087</Text> is 
            reviewed and approved, the funds will be credited to your account
            <Text style={styles.boldText}> xxxxxx</Text>
          </Text>

          <TouchableOpacity
            style={styles.trackButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Track Application</Text>
          </TouchableOpacity>
        </View>
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
    zIndex: 1,
  },
  closeButton: {
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
  successContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: -60,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a365d',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  walletIconContainer: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  successText: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  boldText: {
    fontWeight: '600',
    color: '#1a365d',
  },
  trackButton: {
    backgroundColor: '#1a365d',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SuccessScreen;