import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {strMealThumb, strMeal, strCategory, strArea} = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p>Region: {strArea}</p>
        </div>
    );
};

export default Meal;