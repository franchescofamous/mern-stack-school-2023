import React from "react";
import style from "./CoursFilieres.module.css";
const CoursFilires = () => {
  return (
    <>
      <section className={style.cours}>
        <h1 className={style.cours__heading}>
          list de notre filiere Genie Logiciel
        </h1>
        <section className={style.cours__list}>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
        </section>
      </section>
    </>
  );
};

export default CoursFilires;
