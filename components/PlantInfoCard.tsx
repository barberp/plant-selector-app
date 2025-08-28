import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Plant {
  name: string;
  emoji: string;
  category: string;
  description?: string;
  season?: string;
  difficulty?: string;
}

interface PlantInfoCardProps {
  plant: Plant;
}

export function PlantInfoCard({ plant }: PlantInfoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{plant.emoji}</Text>
        <View style={styles.headerText}>
          <Text style={styles.name}>{plant.name}</Text>
          <Text style={styles.category}>{plant.category}</Text>
        </View>
      </View>
      
      {plant.description && (
        <Text style={styles.description}>{plant.description}</Text>
      )}
      
      <View style={styles.details}>
        {plant.season && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Season:</Text>
            <Text style={styles.detailValue}>{plant.season}</Text>
          </View>
        )}
        {plant.difficulty && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Difficulty:</Text>
            <Text style={styles.detailValue}>{plant.difficulty}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#d1fae5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 28,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#064e3b',
    marginBottom: 2,
  },
  category: {
    fontSize: 12,
    color: '#059669',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
    marginBottom: 12,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '600',
    marginRight: 4,
  },
  detailValue: {
    fontSize: 12,
    color: '#1f2937',
  },
});