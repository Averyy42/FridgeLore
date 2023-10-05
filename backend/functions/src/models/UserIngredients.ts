import { ObjectId } from 'mongodb'

export default interface UserIngredients { //object
    _id?: ObjectId,
    ingredients: string[], //props
    allergies?: string[],
    cuisine?: string[]
}