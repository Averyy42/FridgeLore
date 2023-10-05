import "../../src/styles/recipecomponent.css"


function RecipeComponent() {

    const apiKey: string = 'YOUR_SPOONACULAR_API_KEY';
const searchButton: HTMLButtonElement | null = document.getElementById('searchButton') as HTMLButtonElement;
const ingredientInput: HTMLInputElement | null = document.getElementById('ingredientInput') as HTMLInputElement;
const recipeList: HTMLDivElement | null = document.getElementById('recipeList') as HTMLDivElement;

if (searchButton && ingredientInput && recipeList) {
    searchButton.addEventListener('click', () => {
        const ingredients: string = ingredientInput.value.trim();
        if (!ingredients) {
            alert('Please enter ingredients.');
            return;
        }
        recipeList.innerHTML = '';

        // request to Spoonacular API
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`)
            .then((response) => response.json())
            .then((recipes) => {
                if (recipes.length === 0) {
                    recipeList.innerHTML = '<p>No recipes found.</p>';
                    return;
                }

            // recipe cards
                recipes.forEach((recipe: any) => {
                    const recipeCard: HTMLElement = createRecipeCard(recipe);
                    recipeList.appendChild(recipeCard);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while fetching recipes.');
            });
            
        function createRecipeCard(recipe: any): HTMLElement {
        const card: HTMLDivElement = document.createElement('div');
        card.classList.add('recipe-card');

        const title: HTMLHeadingElement = document.createElement('h2');
        title.textContent = recipe.title;

        const image: HTMLImageElement = document.createElement('img');
        image.src = recipe.image;

        const link: HTMLAnchorElement = document.createElement('a');
        link.href = recipe.sourceUrl;
        link.textContent = 'View Recipe';

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(link);

        return card;
    }});   
}
};


export default RecipeComponent;