
export interface RecipeResponse {
    data: Recipe[]
}

export interface DetailedResponse {
    data: RecipeDetailed
}

export interface IngredientResponse {
    data: Ingredient
}

export interface Recipe {
    title: string,
    id: number,
    image: string,
    imageType: string,
    likes: number,
    missedIngredientCount: number,
    missedIngredients: Ingredient[]
}

export interface Ingredient {
    aisle: string,
    amount: number,
    id: number,
    image: string,
    meta: [],
    name: string,
    original: string,
    originalName: string,
    unit: string,
    unitLong: string,
    unitShort: string,
}

export interface RecipeDetailed {
    id: number,
    title: string,
    image: string,
    servings: number,
    readyInMinutes: number,
    sourceName: string,
    sourceUrl: string,
    instructions: string,
    extendedIngredients: Ingredient[],

}