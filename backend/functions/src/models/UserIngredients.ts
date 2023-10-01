import { ObjectId } from 'mongodb'

export default interface UserIngredients {
    _id?: ObjectId,
    ingredients: string[],
    allergies?: string[],
    cuisine?: string[]
}