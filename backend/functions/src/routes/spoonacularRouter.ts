import { Router } from "express";
import { getRecipe, getRecipesFromIngList } from "../services/spoonacularService";

export const spoonRouter = Router();

spoonRouter.get('/recipes/findByIngredients', async (req, res) => {
           const ingredients = req.query.ingredients as string[] 
           const allergies = req.query.allergies as string[] | undefined
           const cuisines = req.query.cuisines as string[] | undefined

           let allergiesString: string | undefined;
           let cuisinesString: string | undefined;

           if(allergies) {
            allergiesString = allergies.toString()
           }

           if(cuisines) {
            cuisinesString = cuisines.toString()
           }

    const { data } = await getRecipesFromIngList(ingredients.toString(), allergiesString, cuisinesString);
    res.json(data);
});

spoonRouter.get('/recipes/:id', async (req, res) => {
    const id = req.params.id
    const { data } = await getRecipe(id);
    res.json(data)
})