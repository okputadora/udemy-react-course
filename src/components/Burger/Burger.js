import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
  // convert ingredients passed from BurgerBuilder state into array
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((elem, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    console.log(transformedIngredients)
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
