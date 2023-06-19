import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 16,
    backgroundColor: Colors.primary800,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});

export default Card;
