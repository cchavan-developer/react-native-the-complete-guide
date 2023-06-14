import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, onDeleteItem }) => {
  const handleOnPress = () => {
    onDeleteItem();
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, itemData.id)}
        style={({pressed}) => (pressed ? styles.pressedItem: '')}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E0ACC"
  },
  goalText: {
    color: "#FFF",
    padding: 8
  },
  pressedItem: {
    opacity: "0.5"
  }
});

export default GoalItem;
