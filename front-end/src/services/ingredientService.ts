import axios from "axios";
import UserIngredients from "../models/UserIngredients";

const ingredientsBaseUrl: string = process.env.REACT_APP_API_URL || "";

export const getIngredients = async () => {
    const response = await axios.get<UserIngredients>(ingredientsBaseUrl);
    return response.data;
}

export const addIngredients = async (ingredients: UserIngredients) => {
    const response = await axios.post<UserIngredients>(ingredientsBaseUrl, ingredients);
    return response.data;
}

export const getUserIngredients = async (uid: string) => {
    const response = await axios.get<UserIngredients>(`${ingredientsBaseUrl}/find/${uid}`);
    return response.data;
}

export const updateIngredients = async (uid: string, ingredients : UserIngredients) => {
    const response = await axios.put<UserIngredients>(`${ingredientsBaseUrl}/${encodeURIComponent(uid)}`, ingredients)
}