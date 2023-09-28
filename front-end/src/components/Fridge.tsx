import { useContext, useState } from "react"
import "../styles/fridge.css"
import { Ingredient } from "../models/Ingredient";
import IngredientsContext from "../context/IngredientsContext";

interface FridgeProps {
    isOpen: boolean;
    toggleOpen(): void;
}

export const Fridge = ({isOpen, toggleOpen }: FridgeProps) => {
    const ingredients = useContext(IngredientsContext);
    const listIngredients = ingredients.ingredients.map((ingredient) =>
    <li>{ingredient}</li>
    );
    return (
        <div id='fridge-container'>
        <div id="fridge-object">
        <div id="fridge" onClick={toggleOpen}>
            <div id="ingredient-list-container">
                <ul id="ingredient-list">
                    {listIngredients}              
                </ul>
            </div>
            <div id="fridge-door" className={isOpen ? 'door-open' : ''}>
                <div id="door-handle"></div>
            </div>
        </div>
        <div className="fridge-bottom"></div>
        </div>
        </div>
    )
}