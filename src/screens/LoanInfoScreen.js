// src/screens/LoanInfoScreen/index.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';

const EligibilitySummaryItem = ({ text }) => (
  <View style={styles.summaryItem}>
    <Ionicons name="checkmark" size={20} color="#f59e0b" />
    <Text style={styles.summaryText}>{text}</Text>
  </View>
);

const LoanInfoScreen = ({ navigation }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('24 Months');
  const [error, setError] = useState('');

  const handleProceed = () => {
    const amount = parseFloat(loanAmount.replace(/,/g, ''));
    if (amount > 2000000) {
      setError('Amount inputed exceeds maximum amount eligible.');
      return;
    }
    setError('');
    navigation.navigate('DocumentUpload');
  };

  const eligibilitySummary = [
    { text: "You're eligible to: ₦2,000,000.00" },
    { text: "Tenure: 24 Months" },
    { text: "Interest Rate: 5%" },
    { text: "Management fees: 2%" },
    { text: "Credit Life Insurance fee: 2%" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProgressBar currentStep={1} />
      
      <ScrollView style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Loan Eligibility Information</Text>
          <Text style={styles.subtitle}>
            This is the maximum amount available to you.
            Please enter your desired loan amount below
          </Text>
        </View>

        <View style={styles.eligibilitySummary}>
          <Text style={styles.heading}>Here's your loan eligibility summary</Text>
          <Text style={styles.subheading}>
            Input your desired loan option from the summary
          </Text>

          {eligibilitySummary.map((item, index) => (
            <EligibilitySummaryItem key={index} text={item.text} />
          ))}

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Loan Amount</Text>
            <TextInput
              style={[styles.input, error ? styles.inputError : null]}
              placeholder="Enter loan amount"
              value={loanAmount}
              onChangeText={(text) => {
                setLoanAmount(text);
                setError('');
              }}
              keyboardType="numeric"
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Text style={styles.inputLabel}>Tenure</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => {}}>
              <Text>{tenure}</Text>
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleProceed}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  infoBox: {
    backgroundColor: '#f8fafc',
    padding: 16,
    margin: 16,
    borderRadius: 8,
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
  eligibilitySummary: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1a365d',
  },
  inputSection: {
    marginTop: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
    marginTop: -12,
    marginBottom: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#1a365d',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoanInfoScreen;