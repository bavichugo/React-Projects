import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className={classes.header}>
          <h1>ReactMeals</h1>
          <button>Cart</button>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
