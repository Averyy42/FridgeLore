import axios from "axios";
import { DetailedResponse, RecipeResponse } from "../models/spoon.js";

const ingredientsBaseUrl: string = process.env.REACT_APP_API_URL || "";

export const getRecipesFromIngList = async (ingredients: string[]) => {
    const response = await axios.get<RecipeResponse>(`${ingredientsBaseUrl}/recipes/findByIngredients`, {
        params: {
            // ingredients: encodeURIComponent(ingredients.reduce((f,s) => `${f},${s}`))
            ingredients
        }
    });
    return response.data;
}

export const getRecipe = async (id: any) => {
    const response = await axios.get<DetailedResponse>(`${ingredientsBaseUrl}/recipes/${id}`)
    return response.data;
}