import React from "react";
import { NavLink } from "react-router-dom";

import "../style.css";

export default function NewsListButton ( data ) {
  return (
    <div className="news__list__item__btn__wrapper">  
    <NavLink to="/news" className="news__list__btn"
        onClick={
            (e, par = data ) => {
                console.log(par);
            }
        }> Далее </NavLink>
    </div> 
  );
}