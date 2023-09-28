import React, { useContext, useEffect, useState } from 'react'
import { Fridge } from './Fridge';
import { RecipeBook } from './RecipeBook';
import { IngredientForm } from './forms/IngredientForm';
import '../styles/main.css'
import { getUserIngredients } from '../services/ingredientService';
import AuthContext from '../context/AuthContext';
import IngredientsContext from '../context/IngredientsContext';

function Main() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
        setOpen(!isOpen);
  }

  return (
    <div className="Main">
      <Fridge isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen? (<IngredientForm />):(<RecipeBook/>)}
    </div>
  );
}

export default Main;