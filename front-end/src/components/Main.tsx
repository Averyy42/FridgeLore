import React, { useState } from 'react'
import { Fridge } from './Fridge';
import { RecipeBook } from './RecipeBook';
import { IngredientForm } from './forms/IngredientForm';
import { Ingredient } from '../models/Ingredient';
import '../styles/main.css'

function Main() {
  const [ingredients, setIngredients] = useState<String[]>([]);
  const [isOpen, setOpen] = useState(false);

  

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
