import { createContext } from "react";
import { Recipe } from "../models/spoon";

export interface IngredientsContextModel {
    recipes: Recipe[]
    ingredients: string[]
    updateIngredients(name: string): void
};

const defaultValue: IngredientsContextModel = {
    recipes: [],
    ingredients: [],
    updateIngredients(name: string): void{}
};

const IngredientsContext = createContext(defaultValue);
export default IngredientsContext;