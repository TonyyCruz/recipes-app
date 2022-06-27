import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import ScreenMain from './Pages/ScreenMain';
import FoodsScreenDetails from './Pages/FoodsScreenDetails';
import FoodsScreenExplore from './Pages/FoodsScreenExplore';
import DrinksScreenDetails from './Pages/DrinksScreenDetails';
import ScreenInProgress from './Pages/ScreenInProgress';
import ScreenExploreMain from './Pages/ScreenExploreMain';
import ScreenProfile from './Pages/ScreenProfile';
import ScreenDoneRecipes from './Pages/ScreenDoneRecipes';
import ScreenFavoriteRecipes from './Pages/ScreenFavoriteRecipes';
import DrinksScreenExplore from './Pages/DrinksScreenExplore';
import DrinksIngredients from './Pages/DrinksIngredients';
import FoodsIngredients from './Pages/FoodsIngredients';
import FoodsNationalities from './Pages/FoodsNationalities';

function Routes() {
  return (
    <Switch>
      <Route exact path="/explore/foods/nationalities" component={ FoodsNationalities } />
      <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
      <Route exact path="/explore/foods" component={ FoodsScreenExplore } />
      <Route exact path="/foods/:id/in-progress" component={ ScreenInProgress } />
      <Route exact path="/foods/:id" component={ FoodsScreenDetails } />
      <Route exact path="/foods" component={ ScreenMain } />

      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/drinks" component={ DrinksScreenExplore } />
      <Route exact path="/drinks/:id/in-progress" component={ ScreenInProgress } />
      <Route exact path="/drinks/:id" component={ DrinksScreenDetails } />
      <Route exact path="/drinks" component={ ScreenMain } />

      <Route exact path="/explore" component={ ScreenExploreMain } />
      <Route exact path="/profile" component={ ScreenProfile } />
      <Route exact path="/done-recipes" component={ ScreenDoneRecipes } />
      <Route exact path="/favorite-recipes" component={ ScreenFavoriteRecipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
