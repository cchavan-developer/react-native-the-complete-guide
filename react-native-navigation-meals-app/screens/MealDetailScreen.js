import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealID } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const { imageUrl, title, duration, complexity, affordability } = selectedMeal;

  const headerButtonPressHandler = () => {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meals Details",
      headerRight: () => {
        return <IconButton icon={"star"} color={"white"} onPress={headerButtonPressHandler} />
      }
    })
  }, [navigation])

  return (
    <ScrollView style={styles.mealDetailContainer}>
      <Image source={{ uri: imageUrl }} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subTitle="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle subTitle="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealDetailContainer: {
    marginBottom: 36
  },
  listOuterContainer: {
    alignItems: "center"
  },
  listContainer: {
    maxWidth: "85%",
  },
  img: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#FFF",
  },
  detailText: {
    color: "#FFF",
  },
});

export default MealDetailScreen;
