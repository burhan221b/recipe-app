import React from 'react';

// Similar to anchor tag
import { Link } from 'react-router-dom';

const Recipes = (props) => (
    <div className="container">
        {
            !props.recipes && <h1 className="recipes__title">Please enter Your Delicious Meal Name or Item</h1>
        }

        {
            props.recipes &&
            <div className="row">
                {
                    props.recipes && props.recipes.map((recipe) => {
                        return (
                            <div key={recipe.recipe_id} className="col-md-4" style={{ marginBottom: "2rem" }}>
                                <div className="recipes__box">
                                    <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
                                    <div className="recipe__text">
                                        <h5 className="recipes__title">
                                            {/* greate way to shorten title so the box doesn't expand if the text is too long */}
                                            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}... `}
                                        </h5>
                                        <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
                                    </div>
                                    <button className="recipe_buttons">
                                        <Link to={{
                                            pathname: `/recipe/${recipe.recipe_id}`,
                                            state: { recipe: recipe.title }
                                        }}>View Recipe</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
);

export default Recipes;

{/* <div className="lds-roller"><div>hi</div><div>hi</div><div>hi</div><div>hi</div><div>hi</div><div>hi</div><div>hi</div><div>hi</div></div> */ }


// const Recipes = (props) => (
//     <div className="container">
//         <div className="row">
//             {
//                 props.recipes && props.recipes.map((recipe) => {
//                     return (
//                         <div key={recipe.recipe_id} className="col-md-4" style={{ marginBottom: "2rem" }}>
//                             <div className="recipes__box">
//                                 <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
//                                 <div className="recipe__text">
//                                     <h5 className="recipes__title">
//                                         {/* greate way to shorten title so the box doesn't expand if the text is too long */}
//                                         {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}... `}
//                                     </h5>
//                                     <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
//                                 </div>
//                                 <button className="recipe_buttons">
//                                     <Link to={{
//                                         pathname: `/recipe/${recipe.recipe_id}`,
//                                         state: { recipe: recipe.title }
//                                     }}>View Recipe</Link>
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
// );

// export default Recipes;