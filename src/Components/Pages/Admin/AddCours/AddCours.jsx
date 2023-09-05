import axios from "axios";
import React, { useEffect, useState } from "react";

const AddCours = () => {
  let [cours, setCours] = useState("");
  let [selectedFiliere, setSelectedFiliere] = useState("");
  let [description, setDescription] = useState("");
  let [filieres, setFilieres] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/filiere/select")
      .then((reponse) => {
        //console.log(reponse.data);
        setFilieres(reponse.data.filiereListe);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let filiereOptionElt =
    filieres &&
    filieres.map((filiere) => {
      return (
        <option value={filiere.id_filiere} key={filiere.id_filiere}>
          {" "}
          {filiere.nom_filiere}{" "}
        </option>
      );
    });
  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { cours, filiere: Number(selectedFiliere), description };
    console.log(data);
    axios
      .post("http://localhost:5000/cours/add", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Nom du cours:</label>
          <br />
          <input
            type="text"
            id="name"
            required
            onInput={(e) => {
              setCours(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="filiere">Filiere</label>
          <select
            name=""
            id=""
            required
            onChange={(e) => setSelectedFiliere(e.target.value)}
          >
            <option> choisir une filiere</option>
            {filiereOptionElt}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description du cours:</label>
          <br />
          <textarea
            onBlur={(e) => {
              setDescription(e.target.value);
            }}
            name=""
            id="description"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default AddCours;
