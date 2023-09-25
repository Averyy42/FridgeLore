import React, { useContext, useEffect, useState } from 'react'
import { Fridge } from './Fridge';
import { RecipeBook } from './RecipeBook';
import { IngredientForm } from './forms/IngredientForm';
import '../styles/main.css'
import { getUserIngredients } from '../services/ingredientService';
import AuthContext from '../context/AuthContext';

function Main() {
  const [ingredients, setIngredients] = useState<String[]>([]);
  const [isOpen, setOpen] = useState(false);

  const user = useContext(AuthContext);
  
  useEffect(() => {
    if (user.user) {
    getUserIngredients(user.user.uid).then((data) => {
      setIngredients(data.ingredients)
    })};
  });

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
