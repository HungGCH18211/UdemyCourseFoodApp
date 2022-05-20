import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import React from "react";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites.context";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.heading}>
        <Text style={styles.text}>No favorite meals</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
