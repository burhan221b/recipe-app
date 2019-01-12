import React from 'react';
import Loader from './Loader/index.js';
// cant use classless, need class based component

// to help go back
import { Link } from "react-router-dom";


const API_KEY = "d4376f45475912a4a1ae924b87649fcc";


class Recipe extends React.Component {
    state = {
        activeRecipe: [],
        // my own code below
        isFetching: false
    }
    componentDidMount = async () => {
        // this fires when the Recipe components gets loaded in the web browser
        this.setState({ isFetching: true })
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();

        this.setState({ activeRecipe: res.recipes[0], isFetching: false });
    }


    render() {
        // to make it look nicer, we reduce the path to equal recipe
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                {
                    // my code
                    this.state.isFetching && <div className="active-recipe"><Loader className="active-recipe__img" /></div>
                }
                {
                    !this.state.isFetching && this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Back</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe;