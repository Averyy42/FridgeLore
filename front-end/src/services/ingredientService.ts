import axios from "axios";
import UserIngredients from "../models/UserIngredients";
// import { Ingredient } from "../models/Ingredient";

const ingredientsBaseUrl: string = process.env.REACT_APP_API_URL || "";

export const getIngredients = async () => {
  const response = await axios.get<UserIngredients>(ingredientsBaseUrl);
  return response.data;
};

export const addIngredients = async (ingredients: UserIngredients) => {
  const response = await axios.post<UserIngredients>(
    ingredientsBaseUrl,
    ingredients
  );
  return response.data;
};

export const getUserIngredients = async (uid: string) => {
  const response = await axios.get<UserIngredients>(
    `${ingredientsBaseUrl}/find/${uid}`
  );
  return response.data;
};

export const updateIngredients = async (uid: string, ingredients: string[]) => {
  const response = await axios.patch<UserIngredients>(
    `${ingredientsBaseUrl}/${encodeURIComponent(uid)}/addIngredients`,
    { ingredients: ingredients }
  );
  return response.data;
};

export const updateCuisine = async (uid: string, ingredients: string[]) => {
  const response = await axios.patch<UserIngredients>(
    `${ingredientsBaseUrl}/${encodeURIComponent(uid)}/addCuisine`,
    { ingredients: ingredients }
  );
  return response.data;
};

export const updateAllergies = async (uid: string, ingredients: string[]) => {
  const response = await axios.patch<UserIngredients>(
    `${ingredientsBaseUrl}/${encodeURIComponent(uid)}/addAllergies`,
    { ingredients: ingredients }
  );
  return response.data;
};