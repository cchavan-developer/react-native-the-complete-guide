import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});


export default MealsList;