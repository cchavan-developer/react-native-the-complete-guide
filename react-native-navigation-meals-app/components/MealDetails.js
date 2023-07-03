import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  details: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})

export default MealDetails;