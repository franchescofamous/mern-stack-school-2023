import React from "react";

import style from "./Acceuill.module.css";
const Acceuill = () => {
  return (
    <>
      <section className={style.schoolImage}>
        <h1>The Mern Stack School</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          blanditiis obcaecati repudiandae debitis porro vitae ex voluptates ea
          ullam esse.
        </p>
      </section>
      <section className={style.presentation}>
        <h2>Bienvenue a MERN STACK SCHOOL WORLD</h2>

        <section className={style.presentation__box}>
          <article className={style.presentation__box__view}></article>
          <article className={style.presentation__box__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            debitis libero asperiores quam, dicta, cumque, ad fugiat numquam
            tempore ex expedita perspiciatis! Quos accusamus consequuntur porro
            quod. Sed, illo similique ipsum voluptas sequi aut provident cumque
            laboriosam libero officiis sint vel expedita doloribus maxime
            quibusdam! Fugit sit corporis, optio quis aperiam modi dignissimos,
            accusamus doloribus iure tempora odit qui eveniet! Impedit molestiae
            dignissimos consequuntur at harum dolor dolorem autem, voluptatibus
            alias praesentium nostrum id debitis laborum porro incidunt
            molestias consequatur soluta facere quaerat! Perspiciatis, aliquid
            itaque dolorum in facilis omnis, dolore excepturi inventore fugiat
            recusandae eius molestiae eligendi laborum odit.
          </article>
        </section>
        <section className={style.presentation__box}>
          <article className={style.presentation__box__view}></article>
          <article className={style.presentation__box__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex
            laudantium explicabo magni harum veniam. Veniam deleniti id cumque
            modi voluptatum ab, harum ut a nisi consequatur, eum assumenda nemo
            doloremque tenetur necessitatibus velit recusandae. Corrupti quasi
            pariatur et quibusdam porro dignissimos dicta aut nisi laborum, quam
            rem in quos quidem laudantium, soluta culpa quod, laboriosam dolores
            libero illo doloremque ad. Quae consequuntur eos fuga distinctio
            totam eum exercitationem quibusdam, sint illum vel incidunt
            nesciunt, molestias debitis doloremque soluta corporis veniam
            provident. Voluptatem amet iure tempora, ratione quibusdam cum
            obcaecati dolorum rerum quidem eum, voluptates, saepe deleniti qui
            esse atque.
          </article>
        </section>
      </section>
    </>
  );
};

export default Acceuill;
