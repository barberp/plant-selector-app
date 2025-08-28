import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { ChevronDown, Search } from 'lucide-react-native';
import { EDIBLE_PLANTS } from '@/data/plants';

interface PlantSelectorProps {
  onPlantSelect: (plant: string) => void;
}

export function PlantSelector({ onPlantSelect }: PlantSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlant, setSelectedPlant] = useState('');
  const { height } = Dimensions.get('window');
  const searchInputRef = useRef<TextInput>(null);

  const filteredPlants = EDIBLE_PLANTS
    .filter(plant => 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handlePlantSelect = (plant: typeof EDIBLE_PLANTS[0]) => {
    setSelectedPlant(plant.name);
    setSearchQuery('');
    setIsOpen(false);
    onPlantSelect(plant.name);
    
    // Reset the dropdown after a short delay to show the selection was made
    setTimeout(() => {
      setSelectedPlant('');
    }, 500);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    // Focus the search input after the modal opens
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const renderPlantItem = ({ item }: { item: typeof EDIBLE_PLANTS[0] }) => (
    <TouchableOpacity
      style={styles.plantItem}
      onPress={() => handlePlantSelect(item)}
    >
      <Text style={styles.plantEmoji}>{item.emoji}</Text>
      <View style={styles.plantInfo}>
        <Text style={styles.plantName}>{item.name}</Text>
        <Text style={styles.plantCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={handleOpenModal}
      >
        <Text style={[
          styles.selectorText,
          selectedPlant ? styles.selectedText : styles.placeholderText
        ]}>
          {selectedPlant || '🌿 Select a plant to add to your garden'}
        </Text>
        <ChevronDown size={20} color="#6b7280" />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { maxHeight: height * 0.8 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select a Plant 🌱</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsOpen(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <Search size={18} color="#6b7280" style={styles.searchIcon} />
              <TextInput
                ref={searchInputRef}
                style={styles.searchInput}
                placeholder="Search plants..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#9ca3af"
                autoFocus={false}
              />
            </View>

            <Text style={styles.resultsCount}>
              {filteredPlants.length} plants available
            </Text>

            <FlatList
              data={filteredPlants}
              keyExtractor={(item, index) => `${item.name}-${index}`}
              renderItem={renderPlantItem}
              style={styles.plantList}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#d1fae5',
  },
  selectorText: {
    fontSize: 16,
    flex: 1,
  },
  selectedText: {
    color: '#1f2937',
    fontWeight: '600',
  },
  placeholderText: {
    color: '#9ca3af',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#064e3b',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  resultsCount: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
    textAlign: 'center',
  },
  plantList: {
    maxHeight: 400,
  },
  plantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  plantEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  plantInfo: {
    flex: 1,
  },
  plantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  plantCategory: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  separator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginVertical: 4,
  },
});