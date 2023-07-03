import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ subTitle }) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    margin: 6,
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
  },
})

export default Subtitle