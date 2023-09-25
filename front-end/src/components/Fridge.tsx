import { useState } from "react"
import "../styles/fridge.css"
import { Ingredient } from "../models/Ingredient";

interface FridgeProps {
    isOpen: boolean;
    toggleOpen(): void;
    ingredients: String[];
}

export const Fridge = ({isOpen, toggleOpen, ingredients}: FridgeProps) => {
    const listIngredients = ingredients.map((ingredient) =>
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