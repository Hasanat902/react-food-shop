import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections } from '@fortawesome/free-solid-svg-icons'
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
                <button className='meal-btn' onClick={() => handleMealDetails(meal)}>
                    <p className='btn-text'>Details</p>
                    <FontAwesomeIcon icon={faDirections}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Meal;