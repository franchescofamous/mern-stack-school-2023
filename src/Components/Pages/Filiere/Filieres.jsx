import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./filiere.module.css";
import axios from "axios";

const Filieres = () => {
  let [filiereList, setFiliereList] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/filiere/select")
      .then((reponse) => {
        console.log(reponse.data);
        setFiliereList(reponse.data.filiereListe);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let filiereElt =
    filiereList &&
    filiereList.map((filiere) => {
      return (
        <article className={style.filiere__card} key={filiere.id_filiere}>
          <h3> {filiere.nom_filiere} </h3>
          <p>{filiere.description_filiere}</p>
          <button>
            <Link to={`${filiere.id_filiere}`}>Visiter</Link>
          </button>
        </article>
      );
    });
  return (
    <>
      <section className={style.filiereImage}>
        <h1>Nos Filieres </h1>
      </section>
      <section className={style.filiere__info}>
        <section className={style.filiere__presentation}>
          <h2>Quel filieres aimeriez-Vous choisir?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            excepturi qui explicabo deserunt dicta voluptatibus quod quaerat
            nesciunt reprehenderit, ad praesentium dignissimos eaque cupiditate
            alias doloribus soluta omnis! Quibusdam sed fugit pariatur nemo
            itaque, est autem doloremque. Eos provident fugiat dignissimos vero,
            eum facilis. Voluptate incidunt vel aliquid enim! Maxime labore
            saepe nisi, quibusdam ea illum. Totam dignissimos nesciunt quia
            optio, tenetur nisi doloribus, architecto expedita nobis cumque
            possimus pariatur impedit reprehenderit accusantium quas aspernatur
            eum itaque vero sit officia dolore. Hic, vel illo facilis harum,
            deleniti nisi ipsam delectus eum aperiam at beatae ducimus. Maxime
            ipsa voluptatum dolor voluptatibus.
          </p>
          <section className={style.filiere__research}></section>
          <section className={style.filiere__list}>{filiereElt}</section>
        </section>
      </section>
    </>
  );
};

export default Filieres;
