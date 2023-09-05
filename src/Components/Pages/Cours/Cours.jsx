import React, { useEffect, useState } from "react";
import style from "./Cours.module.css";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const Cours = () => {
  let { idCours } = useParams();
  let location = useLocation();
  let [cours, setCours] = useState(null);
  console.log(idCours);
  console.log(location);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cours/select/" + idCours)
      .then((res) => {
        //console.log(res);
        setCours(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h3> {cours && cours[0].nom_cours} </h3>
      <p> {cours && cours[0].description_cours} </p>
    </>
  );
};

export default Cours;
