import { Ingredient } from "../models/Ingredient";

interface IngredientProps {
    ingredient: string;
}

export const IngredientObject = ({ ingredient }: IngredientProps) => {
    return (
        <li>
            {ingredient}
        </li>
    )
}
