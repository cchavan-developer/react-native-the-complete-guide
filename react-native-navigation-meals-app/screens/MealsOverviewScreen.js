import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    const pressHandler = () => {
      navigation.navigate('MealDetail', {
        mealID: item.id
      })
    }

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
