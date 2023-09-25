import { useState } from "react"
import "../styles/fridge.css"
import { Ingredient } from "../models/Ingredient";

interface FridgeProps {
    isOpen: boolean;
    toggleOpen(): void;
    ingredients: String[];
}

export const Fridge = ({isOpen, toggleOpen, ingredients}: FridgeProps) => {

    return (
        <div id='fridge-container'>
        <div id="fridge-object">
        <div id="fridge" onClick={toggleOpen}>
            <div id="ingredient-list-container">
                <ul id="ingredient-list">
                    {ingredients.map((ingredient: String) => (
                        <li className="ingredient" key={ingredient.toString()}></li>
                    ))}
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