import { FormEvent, useState } from 'react';
import { Ingredient } from '../../models/Ingredient';
import '../../styles/ingredientform.css'

export const IngredientForm = () => {
    const [name, setName] = useState('');
    const [upc, setUpc] = useState('');

    function createIngredient(event: FormEvent) {
        event.preventDefault();
        const ingredient: Ingredient = {name};
        
        setName('');
    }

    return (
        <div className='form-container-parent'>
            <div className='form-container-child'>
                <form className='upc-form' >
                    <label htmlFor="UPC">UPC #</label>
                    <input type="text" name="UPC"></input>
                    <button type='submit' onClick={createIngredient}>Save Ingredient</button>
                </form>
                <form className='name-form' onSubmit={createIngredient}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="Name" onChange={(event) => setName(event.target.value)}></input>
                    <button type='submit' onClick={createIngredient}>Save Ingredient</button>
                </form>
            </div>
        </div>
    )
}