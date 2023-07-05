# React Native - The Complete Guide

## React Native State Management

https://academind.com/tutorials/reactjs-redux-vs-context-api


### Using React Context

#### Step 1 :: Create a context using createContext

```
<!-- Create context accepts default value / initial value -->

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorites: (id) => {},
});

```

#### Step 2 :: Create a functional component which would work as a Provider

```

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

  <!-- Provider accepts a parameter value which is an object and has all the necessary information that needs to be exposed to the outside world -->

  const value = {
    id: favoriteMealIDs, // state
    addFavorite,
    removeFavorite
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;

```


#### Step 3 :: Wrap the app component or the component where you want to use FavoriteMeal information inside the FavoritesContextProvider defined above

```

<FavoritesContextProvider>
  <App />        
</FavoritesContextProvider>

```

#### Step 4 :: Use Context

```
const FavoriteMealContext = useContext(FavoritesContext);

You can access ids, addFavorite and removeFavorite from FavoriteMealContext

```

### Using React Redux

#### Step 1 :: Install redux toolkit and react-redux

npm install @reduxjs/toolkit react-redux


#### Step 2 :: Create store.js

#### Step 3 :: import configureStore from redux toolkit and define store

```

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeal: favoritesReducer
  }
});
```

#### Step 3 :: Wrap the app component or the component where you want to use store within react-redux Provider 
```
import { Provider } from "react-redux";
<!-- Store is created in step 2 and 3 -->

<Provider store={store}>
  <App />        
</Provider>

```


#### Step 4 :: Create Slice

```

import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: []
  }, reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
});


export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;

```

#### Step 5 :: Usage

```
import { useSelector, useDispatch } from "react-redux";

const ids = useSelector((state) => state.favoriteMeal.ids);
const dispatch = useDispatch();

  const changeFavoriteStatusHandler = () => {
   if (mealIsFavorite) {
    // FavoriteMealContext.removeFavorite(mealID);
    dispatch(removeFavorite({id: mealID}));
   } else {
    // FavoriteMealContext.addFavorite(mealID);
    dispatch(addFavorite({id: mealID}))
   }
  };


```