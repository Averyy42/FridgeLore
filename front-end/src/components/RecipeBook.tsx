import { useContext } from 'react'
import '../styles/recipebook.css'
import IngredientsContext from '../context/IngredientsContext'
import { Recipe } from '../models/spoon'
import { RecipeCard } from './RecipeCard'

export const RecipeBook = () => {
    const response = useContext(IngredientsContext)

    return (
        <div className='recipe-book-container-parent'>
            <div className='recipe-book-container-child'>
                <ul className='recipe-list'>
                    {response.recipes && response.recipes.map((recipe: Recipe) => (
                        <RecipeCard key={recipe.id.toString()} recipe={recipe} />
                    ))}
                </ul>
                <button>{'< Prev'}</button>
                <button>{'Next >'}</button>
            </div>
        </div>
    )
}