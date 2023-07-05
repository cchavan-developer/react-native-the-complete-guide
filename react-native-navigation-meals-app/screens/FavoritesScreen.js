// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummyData";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreen = () => {

  const favoritesMealsIds = useSelector((state) => state.favoriteMeal.ids)
  // const FavoriteMealContext = useContext(FavoritesContext);


  const favoritesMeals = MEALS.filter(meal => favoritesMealsIds.includes(meal.id));

  if (!favoritesMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoritesMeals} />
  )
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
})

export default FavoritesScreen;