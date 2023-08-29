import React, { useState } from "react";
import style from "./Signup.module.css";
const Signup = () => {
  let [nameInput, setNameInput] = useState("");
  let [surnameInput, setSurnameInput] = useState("");
  let [emailInput, setEmailInput] = useState("");
  let [pwdlInput, setPwd] = useState("");
  return (
    <>
      <section className={style.signup}>
        <section className={style.signup__box}>
          <h1 className={style.signup__heading}>Inscription</h1>
          <section className={style.signup__form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let signupInfo = {
                  name: nameInput,
                  surname: surnameInput,
                  email: emailInput,
                  password: pwdlInput,
                };
                console.log(signupInfo);
              }}
            >
              <p className={style.signup__form__info}></p>
              <div>
                <label htmlFor="nom">Nom:</label>
                <br />
                <input
                  type="text"
                  name=""
                  id="nom"
                  onInput={(e) => {
                    setNameInput(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="prenom">Prenom:</label>
                <br />
                <input
                  type="text"
                  name=""
                  id="prenom"
                  onInput={(e) => {
                    setSurnameInput(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  onInput={(e) => {
                    setEmailInput(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="pwd">Mot de passe:</label>
                <br />
                <input
                  type="password"
                  name=""
                  id="pwd"
                  onInput={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </div>

              <div>
                <button type="submit">Valider</button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default Signup;
