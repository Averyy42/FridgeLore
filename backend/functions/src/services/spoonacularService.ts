import axios from 'axios';
import * as functions from 'firebase-functions'
import { DetailedResponse, RecipeResponse } from '../models/SpoonResponse';

const SPOON_API_KEY = functions.config().spoonacular.apitoken;

export const getRecipesFromIngList = (
    ingredients: string,
    allergies?: string,
    cuisines?: string
  ) => {
    console.log(SPOON_API_KEY)
    const params: { [key: string]: string | undefined } = {
      apiKey: SPOON_API_KEY,
      includeIngredients: ingredients,
      sort: "max-used-ingredients",
      number: "24", // subject to change
    };
  
    if (allergies) {
      params.intolerances = allergies;
    }
  
    if (cuisines) {
      params.cuisine = cuisines;
    }
  
    return axios.get<RecipeResponse>('https://api.spoonacular.com/recipes/complexSearch', {
      params,
    });
  };

export const getRecipe = (id: any) => {
    return axios.get<DetailedResponse>(`https://api.spoonacular.com/recipes/${id}/information`, {params: SPOON_API_KEY})
}