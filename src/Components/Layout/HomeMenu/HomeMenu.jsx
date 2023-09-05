import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./HomeMenu.module.css";
import logo from "../../../Assets/logo.png";

const HomeMenu = () => {
  let location = useLocation();
  console.log(location);
  return (
    <header className={style.header}>
      <section className={style.logo}>
        <img src={logo} alt="Logo de l'ecole" />
      </section>
      <section className={style.nav}>
        <menu>
          <ul>
            <li>
              <NavLink to={"/"}>Acceuill</NavLink>
            </li>
            <li>
              <NavLink to={"/filiere"}>Nos Filieres</NavLink>
            </li>
          </ul>
        </menu>
      </section>
      <section className={style.options}>
        {location.pathname === "/signup" && (
          <button>
            <NavLink to={"/login"}>Connexion</NavLink>
          </button>
        )}
        <button>
          <NavLink to={"/signup"}>Inscription</NavLink>
        </button>
      </section>
    </header>
  );
};

export default HomeMenu;
