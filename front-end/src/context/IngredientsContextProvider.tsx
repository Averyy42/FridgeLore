import { ReactNode, useContext, useEffect, useState } from "react";
import IngredientsContext from "./IngredientsContext";
import AuthContext from "./AuthContext";
import { getUserIngredients } from "../services/ingredientService";

function IngredientsContextProvider ({children}: {children: ReactNode}) {
    const [ ingredients, setIngredients ] = useState<string[]>([]);

    const user = useContext(AuthContext);
        if (user.user) {
          getUserIngredients(user.user.uid).then((data) => {
            if (data.ingredients) {
              setIngredients(data.ingredients)
            } else {
              setIngredients(["Empty"])
            }
          })
        };

    return (
    <IngredientsContext.Provider value={{ ingredients }}> 
        {children}
    </IngredientsContext.Provider>
    );
};
export default IngredientsContextProvider;