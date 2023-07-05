import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIDs, setFavoriteMealIDs] = useState([]);

  const addFavorite  = (id) => {
    setFavoriteMealIDs(currentFavIDs => {
      return [...currentFavIDs, id];
    })
  };

  const removeFavorite  = (id) => {
    setFavoriteMealIDs(currentFavIDs => currentFavIDs.filter(mealId => mealId !== id));
  };

  const value = {
    ids: favoriteMealIDs,
    addFavorite,
    removeFavorite
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
