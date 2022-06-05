import * as React from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import img from "./smtp.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [size, setSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img className={classes.header__content__logo} src={img}></img>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <button>Check Symptoms</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggle} />
          ) : (
            <BiMenuAltRight onClick={menuToggle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
