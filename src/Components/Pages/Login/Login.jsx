import React, { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let nav = useNavigate();
  let [emailInput, setEmailInput] = useState("");
  let [pwdlInput, setPwd] = useState("");
  /* let personne = { nom: "abalo", prenom: "koffi", age: 21 };
  let a = JSON.stringify(personne);
  console.log(a);
  console.log(typeof a);
  let b = JSON.parse(a);
  console.log(b);
  console.log(typeof b); */

  return (
    <>
      <section className={style.login}>
        <section className={style.login__box}>
          <h1 className={style.login__heading}>Connexion</h1>
          <section className={style.login__form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let loginInfo = { email: emailInput, password: pwdlInput };
                console.log(loginInfo);
                axios
                  .post("http://localhost:5000/student/login", loginInfo)
                  .then((res) => {
                    console.log(res);
                    //nav("/");
                    localStorage.setItem("token", res.data);
                    localStorage.setItem("mail", emailInput);
                    nav("/");
                  })
                  .catch((error) => console.log(error));
              }}
            >
              <p className={style.login__form__info}></p>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  onInput={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="pwd">Mot de passe:</label>
                <br />
                <input
                  type="password"
                  name=""
                  id="pwd"
                  onInput={(e) => setPwd(e.target.value)}
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

export default Login;
