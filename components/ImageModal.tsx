import React from 'react';
import {
  View,
  Modal,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import CustomButton from './CustomButton';

interface ImageModalProps {
  visible: boolean;
  imageUri: string | null;
  onClose: () => void;
}

const onSave = () => {
  console.log('Saving image to gallery');
}

export default function ImageModal({ visible, imageUri, onClose }: ImageModalProps) {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.modalImage} resizeMode="contain" />
              )}
              <View style={styles.buttonRow}>
                <CustomButton
                  title="Stäng"
                  onPress={onClose}
                  backgroundColor="#F44336"
                  style={{ flex: 1, marginRight: 10 }}
                />
                <CustomButton
                  title="Spara till Galleri"
                  onPress={onSave}
                  backgroundColor="#8BC34A"
                  style={{ flex: 1, marginLeft: 10 }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
  },
});