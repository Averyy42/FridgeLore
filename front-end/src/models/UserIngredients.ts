import { Ingredient } from "./Ingredient";

export default interface UserIngredients {
    _id?: string,
    ingredients?: string[],
    allergies?: string[],
    cuisine?: string[],
}

export const UserIngredientsObj = (_id: string, ingredients?: string[], allergies?: string[], cuisine?: string[]) => {
    return { _id: _id, ingredients: ingredients, allergies: allergies, cusine: cuisine }
}