import axios from "axios";
import UserIngredients from "../models/UserIngredients";
import { Preferences } from "../models/Preferences";

const ingredientsBaseUrl: string = process.env.REACT_APP_API_URL || "";

export const getPreferences = async () => {
  const response = await axios.get<UserIngredients>(ingredientsBaseUrl);
  return response.data;
};

export const addPreferences = async (preferences: UserIngredients) => {
  const response = await axios.post<UserIngredients>(
    ingredientsBaseUrl,
    preferences,
  );
  return response.data;
};

export const getUserIngredients = async (uid: string) => {
  const response = await axios.get<UserIngredients>(
    `${ingredientsBaseUrl}/find/${uid}`
  );
  return response.data;
};

export const updatePreferences = async (uid: string, preferences: string[]) => {
  const response = await axios.patch<UserIngredients>(
    `${ingredientsBaseUrl}/${encodeURIComponent(uid)}/add`,
    { preferences: preferences }
  );
  return response.data;
};
