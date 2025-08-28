import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { MapPin, Thermometer, Droplets, Info } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ Settings</Text>
        <Text style={styles.subtitle}>
          Customize your garden planning experience
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌍 Location Settings</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <MapPin size={20} color="#059669" />
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Current Location</Text>
              <Text style={styles.settingValue}>Not set - Tap to configure</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Thermometer size={20} color="#059669" />
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Hardiness Zone</Text>
              <Text style={styles.settingValue}>Auto-detect based on location</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌱 Garden Preferences</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Droplets size={20} color="#059669" />
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Watering Schedule</Text>
              <Text style={styles.settingValue}>Coming soon</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ About</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Info size={20} color="#059669" />
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>App Version</Text>
              <Text style={styles.settingValue}>1.0.0</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonEmoji}>🚀</Text>
          <Text style={styles.comingSoonTitle}>More Features Coming Soon!</Text>
          <Text style={styles.comingSoonText}>
            • Plant care reminders{'\n'}
            • Weather integration{'\n'}
            • Garden journal{'\n'}
            • Plant compatibility analysis
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fffe',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingContent: {
    marginLeft: 16,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  settingValue: {
    fontSize: 14,
    color: '#6b7280',
  },
  comingSoon: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  comingSoonEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  comingSoonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 12,
  },
  comingSoonText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});