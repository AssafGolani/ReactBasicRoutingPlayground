import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
