import { FormEvent, useContext, useEffect, useState } from 'react';
import { Ingredient } from '../../models/Ingredient';
import '../../styles/ingredientform.css'
import { addIngredients, updateIngredients } from '../../services/ingredientService';
import UserIngredients from '../../models/UserIngredients';
import { User, getAuth } from 'firebase/auth';
import AuthContext from '../../context/AuthContext';

export const IngredientForm = () => {
    const [name, setName] = useState('');
    const [upc, setUpc] = useState('');
    // const [ingredient, setIngredient] = useState<UserIngredients>()
    
    const user = useContext(AuthContext)
    
    // useEffect(() => {
    //     if (user.user) {
    //     const newIngredient = {_id: user.user.uid, ingredients: [name]}
    //     setIngredient(newIngredient)
    //     }
    // }, [])

    async function createIngredient(event: FormEvent) {
        event.preventDefault();
        if (user.user) {
            await updateIngredients(user.user.uid, [name]);
        }
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
                    <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)} />
                    <button type="submit" onClick={createIngredient}>Save Ingredient</button>
                </form>
            </div>
        </div>
    )
}