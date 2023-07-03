import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import MealDetails from "../components/MealDetails";

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#EEE" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
