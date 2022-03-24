import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {handleMealDetails, meal} = props;
    const {strMealThumb, strMeal, strCategory, strArea} = meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <h3>Name: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Region: {strArea}</p>
                <button className='meal-btn' onClick={() => handleMealDetails(meal)}>Details</button>
            </div>
        </div>
    );
};

export default Meal;