import React, { useContext } from "react";
import { headerRoutes } from "../header";
import { NavLink } from "react-router-dom";
import "./mobile-menu.css";
import { StoreContext } from "../../App";

const MobileMenu = () => {
  const { dispatch, showMobileMenu } = useContext(StoreContext);
  return (
    <div className={`menu ${showMobileMenu ? "show" : ""}`}>
      {headerRoutes.map((route) => (
        <NavLink
          onClick={() => {
            dispatch({
              method: "TOGGLE_MENU",
              payload: false,
            });
          }}
          activeClassName="active"
          key={route.id}
          to={route.link}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;
