// src/screens/DocumentUploadScreen/index.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Platform,
  StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import { STATUSBAR_HEIGHT } from '../utils/statusBarHeight';
const UploadBox = ({ title, description, onUpload, file }) => {
  return (
    <View style={styles.uploadSection}>
      <Text style={styles.uploadTitle}>{title}</Text>
      <Text style={styles.uploadDescription}>{description}</Text>
      
      <TouchableOpacity style={styles.uploadBox} onPress={onUpload}>
        <Ionicons 
          name={file ? "checkmark-circle" : "cloud-upload-outline"} 
          size={24} 
          color={file ? "#22c55e" : "#64748b"} 
        />
        <Text style={styles.uploadText}>
          {file ? 'File uploaded successfully' : 'Click to upload or drag and drop'}
        </Text>
        <Text style={styles.uploadSubtext}>PNG, JPG (max. 800×400px)</Text>
      </TouchableOpacity>
    </View>
  );
};

const DocumentUploadScreen = ({ navigation }) => {
  const [idCard, setIdCard] = useState(null);
  const [salaryLetter, setSalaryLetter] = useState(null);

  const handleUpload = async (setFile) => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setFile(result.assets[0].uri);
      }
    } catch (error) {
      alert('Error uploading image');
      console.error(error);
    }
  };

  const handleProceed = () => {
    if (!idCard || !salaryLetter) {
      alert('Please upload all required documents');
      return;
    }
    navigation.navigate('PreApproval');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Header />
        <ProgressBar currentStep={4} />
        
        <ScrollView style={styles.scrollContent}>
          <View style={styles.infoBox}>
            <Text style={styles.title}>Upload Documents</Text>
            <Text style={styles.subtitle}>
              To finish your application, kindly upload the requested document.
            </Text>
          </View>

          <UploadBox
            title="Valid ID Card"
            description="Kindly upload a clear document of one of your Valid Id card listed here: Voter's Card, Driver's License, International Passport"
            onUpload={() => handleUpload(setIdCard)}
            file={idCard}
          />

          <UploadBox
            title="Letter of Salary Domiciliation"
            description="Kindly upload a clear document of your letter of salary domiciliation"
            onUpload={() => handleUpload(setSalaryLetter)}
            file={salaryLetter}
          />

          <TouchableOpacity
            style={[
              styles.proceedButton,
              (!idCard || !salaryLetter) && styles.proceedButtonDisabled
            ]}
            onPress={handleProceed}
          >
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </TouchableOpacity>
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
  scrollContent: {
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
  uploadSection: {
    padding: 16,
    marginBottom: 16,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  uploadDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  uploadText: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  proceedButton: {
    backgroundColor: '#1a365d',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
    marginTop: 8,
  },
  proceedButtonDisabled: {
    backgroundColor: '#94a3b8',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DocumentUploadScreen;