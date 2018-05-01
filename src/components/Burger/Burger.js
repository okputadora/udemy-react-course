import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // convert ingredients passed from BurgerBuilder state into array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((elem, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    // flatten the array
    .reduce((arr, el) => { // arr is the previous val and el is the current val
      return arr.concat(el)
    }, []) // this empty array at the end is what we're building
    if (transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients</p>
    }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
