import '../styles/recipebook.css'

export const RecipeBook = () => {
    return (
        <div className='recipe-book-container-parent'>
            <div className='recipe-book-container-child'>
                <ul>
                </ul>
                <button>{'< Prev'}</button>
                <button>{'Next >'}</button>
            </div>
        </div>
    )
}