import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div>
            <h2>load all meal: {meals.length}</h2>
        </div>
    );
};

export default Meals;