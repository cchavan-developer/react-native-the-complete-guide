import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoal = () => {
    const goal = {
      text: enteredGoalText,
      id: Math.random().toString(),
    };
    addGoalHandler(goal);
    setEnteredGoalText("");
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image 
          source={require("../assets/images/goal.png")} 
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={"#F31282"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color={"#B180F0"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    backgroundColor: "#311B6B"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E4D0FF",
    borderRadius: 6,
    backgroundColor: "#E4D0FF",
    color: "#120438",
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});

export default GoalInput;
