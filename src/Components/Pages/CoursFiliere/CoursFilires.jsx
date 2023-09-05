import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./CoursFilieres.module.css";
import axios from "axios";

const CoursFilires = () => {
  let [courList, setCoursList] = useState(null);
  let { idFiliere } = useParams();
  useEffect(() => {
    axios
      .post("http://localhost:5000/filiere/specific", { idFiliere })
      .then((res) => {
        setCoursList(res.data.coursList);
        console.log(res.data.coursList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let coursElt =
    courList &&
    courList.map((cours) => {
      return (
        <section className={style.cours__card} key={cours.id_cours}>
          <span> {cours.nom_filiere} </span>
          <br />
          <span>{cours.nom_cours} </span>
          <br />
          <button>
            <Link to={`${cours.id_cours}`}>visiter</Link>
          </button>
        </section>
      );
    });

  return (
    <>
      <section className={style.cours}>
        <h1 className={style.cours__heading}>
          list de notre filiere Genie Logiciel
        </h1>

        <section className={style.cours__list}>
          {/* <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section>
          <section className={style.cours__card}></section> */}
          {coursElt}
        </section>
      </section>
    </>
  );
};

export default CoursFilires;
