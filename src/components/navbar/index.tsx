import { FC, useEffect } from "react";
import { NavBarProps } from "./navbarProps";
import styles from "./navbar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classes from "classnames";
import { links } from "./links";

export const Navbar: FC<NavBarProps> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/exp");
  }, [navigate]);
  return (
    <div className={styles.navbar}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          className={classes(styles.navlinks, {
            [styles.activeLink]: link.to === pathname,
          })}
          to={link.to}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};
