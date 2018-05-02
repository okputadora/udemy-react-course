import React from 'react';
import Aux from '../../../hoc/Auxil';
const orderSummary = (props) => {
  // map an object to an array
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return(
      <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    )
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Aux>
  )
}

export default orderSummary;
