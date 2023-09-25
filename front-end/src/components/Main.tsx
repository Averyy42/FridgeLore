import React, { useEffect, useState } from 'react'
import { Fridge } from './Fridge';
import { RecipeBook } from './RecipeBook';
import { IngredientForm } from './forms/IngredientForm';
import '../styles/main.css'
import { getUserIngredients } from '../services/ingredientService';

function Main() {
  const [ingredients, setIngredients] = useState<String[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const id = '650b8b0332a13ff9fc207361';
    getUserIngredients(id).then((data) => {
      setIngredients(data.ingredients)
      console.log(ingredients);
    })
  })

  const toggleOpen = () => {
        setOpen(!isOpen);
  }

  return (
    <div className="Main">
      <Fridge ingredients={ingredients} isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen? (<IngredientForm />):(<RecipeBook/>)}
    </div>
  );
}

export default Main;
