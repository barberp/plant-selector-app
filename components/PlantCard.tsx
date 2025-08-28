import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';
import { EDIBLE_PLANTS } from '@/data/plants';

interface PlantCardProps {
  plant: string;
  onRemove: (plant: string) => void;
  isMobile: boolean;
}

export function PlantCard({ plant, onRemove, isMobile }: PlantCardProps) {
  const plantData = EDIBLE_PLANTS.find(p => p.name === plant);
  
  return (
    <View style={[
      styles.card,
      { width: isMobile ? '100%' : 280 }
    ]}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(plant)}
      >
        <X size={16} color="#ef4444" />
      </TouchableOpacity>
      
      <Text style={styles.emoji}>{plantData?.emoji || '🌱'}</Text>
      <Text style={styles.name}>{plant}</Text>
      <Text style={styles.category}>{plantData?.category || 'Unknown'}</Text>
      
      {plantData?.description && (
        <Text style={styles.description} numberOfLines={2}>
          {plantData.description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#d1fae5',
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fef2f2',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  emoji: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#064e3b',
    textAlign: 'center',
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: '#059669',
    textAlign: 'center',
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 16,
  },
});