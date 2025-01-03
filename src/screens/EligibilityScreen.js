import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';

const EligibilityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProgressBar currentStep={0} />
      
      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Eligibility Verification</Text>
          <Text style={styles.subtitle}>
            This check list must be validated in order to get a loan decision.
          </Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.heading}>
            Get a Personalized Loan Solution in Minutes
          </Text>
          <Text style={styles.subheading}>
            Proceed to check your eligibility amount
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('LoanInfo')}>
            <Text style={styles.buttonText}>Check Your Eligibility</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  helpButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  helpText: {
    color: '#000',
    fontSize: 14,
  },
  progressContainer: {
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressLine: {
    width: 40,
    height: 2,
    marginHorizontal: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoBox: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#1a365d',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EligibilityScreen;