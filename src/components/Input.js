import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione algo a sua lista"
        placeholderTextColor="#7A7A7A"
      />
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Adicionar"
        style={styles.button}
      >
        <MaterialCommunityIcons name="plus-circle-outline" size={16} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#3A3A3A',
    height: 56,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 8,
    marginRight: 8,
    flex: 1,
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#007CB5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});