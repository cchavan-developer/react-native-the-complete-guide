import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";

import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
// const FavoriteMealContext = useContext(FavoritesContext);

  const { mealID } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const { imageUrl, title, duration, complexity, affordability } = selectedMeal;

  // const { ids } = FavoriteMealContext;
  const ids = useSelector((state) => state.favoriteMeal.ids);
  const dispatch = useDispatch();


  const mealIsFavorite = (ids && ids.includes(mealID)) || false;

  const changeFavoriteStatusHandler = () => {
   if (mealIsFavorite) {
    // FavoriteMealContext.removeFavorite(mealID);
    dispatch(removeFavorite({id: mealID}));
   } else {
    // FavoriteMealContext.addFavorite(mealID);
    dispatch(addFavorite({id: mealID}))
   }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meals Details",
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

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
    marginBottom: 36,
  },
  listOuterContainer: {
    alignItems: "center",
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
