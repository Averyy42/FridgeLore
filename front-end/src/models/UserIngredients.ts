import { Ingredient } from "./Ingredient";

export default interface UserIngredients {
    _id?: string,
    ingredients?: string[]
}

export const UserIngredientsObj = (_id: string, ingredients?: string[]) => {
    return { _id: _id, ingredients: ingredients}
}