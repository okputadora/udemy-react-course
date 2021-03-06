import React from 'react';
import Aux from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button'
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
      <p>Continue to checkout?</p>
      <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
      <Button clicked={props.purchaseCanceled} btnType={"Danger"}>CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;
