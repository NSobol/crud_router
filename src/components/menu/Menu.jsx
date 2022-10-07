import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="menu">
      <NavLink to="/" className="menu__item">
        Главная
      </NavLink>
      <NavLink to="/drift" className="menu__item">
        Опубликовать пост
      </NavLink>
    </div>
  );
}

export default Menu;
