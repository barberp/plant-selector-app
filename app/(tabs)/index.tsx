import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { PlantSelector } from '@/components/PlantSelector';
import { PlantCard } from '@/components/PlantCard';

export default function HomeScreen() {
  const [selectedPlants, setSelectedPlants] = useState<string[]>([]);
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  const handlePlantSelect = (plant: string) => {
    if (!selectedPlants.includes(plant)) {
      setSelectedPlants([...selectedPlants, plant]);
    }
  };

  const handlePlantRemove = (plant: string) => {
    setSelectedPlants(selectedPlants.filter(p => p !== plant));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>🌱 Garden Planner</Text>
          <Text style={styles.subtitle}>
            Choose the perfect plants for your garden
          </Text>
        </View>

        <View style={styles.selectorContainer}>
          <PlantSelector onPlantSelect={handlePlantSelect} />
        </View>

        {selectedPlants.length > 0 && (
          <View style={styles.selectedPlantsContainer}>
            <Text style={styles.selectedPlantsTitle}>
              🌿 Your Selected Plants ({selectedPlants.length})
            </Text>
            <View style={[
              styles.plantsGrid,
              { flexDirection: isMobile ? 'column' : 'row' }
            ]}>
              {selectedPlants.map((plant, index) => (
                <PlantCard
                  key={index}
                  plant={plant}
                  onRemove={handlePlantRemove}
                  isMobile={isMobile}
                />
              ))}
            </View>
          </View>
        )}

        {selectedPlants.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateEmoji}>🌾</Text>
            <Text style={styles.emptyStateText}>
              Start by selecting plants from the dropdown above
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Choose from over 100 common edible garden plants
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fffe',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: 300,
  },
  selectorContainer: {
    marginBottom: 30,
    zIndex: 1000,
  },
  selectedPlantsContainer: {
    marginTop: 20,
  },
  selectedPlantsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 15,
  },
  plantsGrid: {
    flexWrap: 'wrap',
    gap: 12,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyStateEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});