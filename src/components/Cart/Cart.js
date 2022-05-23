import React from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [
    {
      id: "C1",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ];

  const cartList = (
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return(
      <Modal onClose={props.onClose}>
          {cartList}
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>88.99</span>
          </div>
          <div className={classes.actions}>
              <button className={classes['button--alt']}>Close</button>
              <button className={classes.button}>Order</button>
          </div>
          </Modal>
  );
};
export default Cart;
