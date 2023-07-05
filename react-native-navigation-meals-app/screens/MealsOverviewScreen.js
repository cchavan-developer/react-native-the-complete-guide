import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

  return (
    <MealsList items={displayedMeals} />
  );
};

export default MealsOverviewScreen;
