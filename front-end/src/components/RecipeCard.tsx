import { Recipe } from "../models/spoon"
import '../styles/recipecard.css'

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <li className="recipe-card">
            <h3 className="recipe-title">{recipe.title}</h3>
            <img className="recipe-image" src={recipe.image}></img>
            <p>Extra Ingredients Required: {recipe.missedIngredientCount}</p>
        </li>
    )
}