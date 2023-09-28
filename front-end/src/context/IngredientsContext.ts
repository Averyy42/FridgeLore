import { createContext } from "react";

export interface IngredientsContextModel {
    ingredients: string[]
}

const defaultValue: IngredientsContextModel = {
    ingredients: []
};

const IngredientsContext = createContext(defaultValue);
export default IngredientsContext;