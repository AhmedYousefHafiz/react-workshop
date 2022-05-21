import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import cssClasses from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={cssClasses.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={cssClasses['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
