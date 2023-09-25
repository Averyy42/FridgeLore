import axios from "axios";
import UserIngredients from "../models/UserIngredients";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const getIngredients = async () => {
    const response = await axios.get<UserIngredients>(baseUrl);
    return response.data;
}

export const addIngredients = async (ingredients: UserIngredients) => {
    const response = await axios.post<UserIngredients>(baseUrl, ingredients);
    return response.data;
}