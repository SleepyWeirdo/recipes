import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div className={style.recipe}>
            <div>
                <h1>{title}</h1>
                <img src={img} alt={title} />
                <p>Calories: {calories.toFixed()}</p>
            </div>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
           
        </div>
    );
}

export default Recipe; 