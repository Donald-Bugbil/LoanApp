// src/screens/PreApprovalScreen/index.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';

const PreApprovalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <View style={styles.successContent}>
          <Text style={styles.title}>
            Congratulations, you have been pre-approved
          </Text>
          
          <View style={styles.checkmarkContainer}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={36} color="#fff" />
            </View>
            <View style={styles.confettiContainer}>
              {/* Confetti dots */}
              <View style={[styles.confetti, styles.confetti1]} />
              <View style={[styles.confetti, styles.confetti2]} />
              <View style={[styles.confetti, styles.confetti3]} />
              <View style={[styles.confetti, styles.confetti4]} />
            </View>
          </View>
          
          <Text style={styles.amountText}>
            You are eligible for 
            <Text style={styles.amountHighlight}> 2,000,000 naira</Text>
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Success')}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.secondaryButtonText}>Not Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  successContent: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
    color: '#1a365d',
    paddingHorizontal: 20,
  },
  checkmarkContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confettiContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  confetti: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  confetti1: {
    backgroundColor: '#f59e0b',
    top: '20%',
    left: '15%',
  },
  confetti2: {
    backgroundColor: '#22c55e',
    top: '15%',
    right: '20%',
  },
  confetti3: {
    backgroundColor: '#3b82f6',
    bottom: '25%',
    left: '20%',
  },
  confetti4: {
    backgroundColor: '#ec4899',
    bottom: '20%',
    right: '15%',
  },
  amountText: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  amountHighlight: {
    color: '#1a365d',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#1a365d',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  secondaryButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PreApprovalScreen;