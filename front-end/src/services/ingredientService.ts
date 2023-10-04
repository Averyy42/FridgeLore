import axios from "axios";
import UserIngredients from "../models/UserIngredients";
import { Ingredient } from "../models/Ingredient";

const ingredientsBaseUrl: string = process.env.REACT_APP_API_URL || "";

export const getIngredients = async () => {
    const response = await axios.get<UserIngredients>(`${ingredientsBaseUrl}/ingredients`);
    return response.data;
}

export const addIngredients = async (ingredients: UserIngredients) => {
    const response = await axios.post<UserIngredients>(`${ingredientsBaseUrl}/ingredients`, ingredients);
    return response.data;
}

export const getUserIngredients = async (uid: string) => {
    const response = await axios.get<UserIngredients>(`${ingredientsBaseUrl}/ingredients/find/${uid}`);
    return response.data;
}

export const updateIngredients = async (uid: string, ingredients: string[]) => {
    const response = await axios.patch<UserIngredients>(`${ingredientsBaseUrl}/ingredients/${encodeURIComponent(uid)}/add`, { ingredients: ingredients })
    return response.data;
}