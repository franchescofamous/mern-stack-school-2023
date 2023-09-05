import axios from "axios";
import React, { useState } from "react";

const AddFiliere = () => {
  let [filiere, setFiliere] = useState("");
  let [description, setDescription] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/filiere/add", { filiere, description })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Nom de la filiere:</label>
          <br />
          <input
            type="text"
            id="name"
            onInput={(e) => setFiliere(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description de la filiere:</label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onBlur={(e) => {
              setDescription(e.target.value);
            }}
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

export default AddFiliere;
