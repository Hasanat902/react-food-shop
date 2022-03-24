import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleMealDetails = (meal) => {
        
        const newMeals = [...foods, meal];
        setFoods(newMeals);
    }

    return (
        <div className='meals-container'>
            <div className="show-meal">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleMealDetails={handleMealDetails}></Meal>)
                }
            </div>
            <div className="meal-details">
                <h3>Meal Details</h3>
                <p>Name: {foods.map(food => food.strMeal)}</p>
            </div>
        </div>
    );
};

export default Meals;