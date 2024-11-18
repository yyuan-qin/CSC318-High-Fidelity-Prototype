import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ActionSheetIOS } from 'react-native';
import { useRouter } from 'expo-router';

const AddItemButton = () => {
  const router = useRouter();

  const addOptionPopUp = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Scan', 'Search'],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          alert('Scan functionality coming soon!');
        } else if (buttonIndex === 2) {
          router.push('../storage/search'); 
        }
      }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={addOptionPopUp}>
      <Text style={styles.text}>{"+"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddItemButton;