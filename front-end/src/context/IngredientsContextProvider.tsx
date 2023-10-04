import { ReactNode, useContext, useEffect, useState } from "react";
import IngredientsContext from "./IngredientsContext";
import AuthContext from "./AuthContext";
import { getUserIngredients, updateIngredients } from "../services/ingredientService";
import { Recipe } from "../models/spoon";
import { getRecipesFromIngList } from "../services/spoonService";

function IngredientsContextProvider ({children}: {children: ReactNode}) {
    const [ ingredients, setIngredients ] = useState<string[]>([]);
    const [ recipes , setRecipes] = useState<Recipe[]>([]);

    const user = useContext(AuthContext);
      
    useEffect(() => {
        if (user.user) {
              getUserIngredients(user.user.uid).then((data) => {
                if (data.ingredients) {
                  setIngredients(data.ingredients)
                  console.log('hi')
                  getRecipesFromIngList(data.ingredients).then((data) => {
                    setRecipes(data.results)
                  })
                } else {
                  setIngredients(["Empty"])
                }
              })
        };
    },[user.user])

    async function createIngredients(name: string) {
        if (user.user) {
            await updateIngredients(user.user.uid, [name]);
            getUserIngredients(user.user.uid).then((data) => {
                if (data.ingredients) {
                  setIngredients(data.ingredients)
                } else {
                  setIngredients(["Empty"])
                }
              })
        }
    }

    return (
    <IngredientsContext.Provider value={{ ingredients, recipes, updateIngredients: createIngredients }}> 
        {children}
    </IngredientsContext.Provider>
    );
};
export default IngredientsContextProvider;