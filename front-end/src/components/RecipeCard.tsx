import { Recipe } from "../models/spoon"

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <li>
            <div>
                <h3>{recipe.title}</h3>
                <img src={recipe.image}></img>
            </div>
        </li>
    )
}