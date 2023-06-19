import { View, StyleSheet, Text } from "react-native"
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 4,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  }
})

export default NumberContainer;