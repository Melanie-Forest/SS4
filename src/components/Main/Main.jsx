import React from 'react'
import styles from "./Main.module.css"
import ABOUT from "../../img/about__img.svg"

const Main = () => {
  return (
    <>
      <main className={styles.Main}>

        <div className={styles.what_it_is}>

          <div className={styles.wts_card}>
            <img src={ABOUT} alt="picture" />
          </div>

          <div className={styles.wts_card}>
            <div className={styles.wts_text_head}>
              Чем мы занимаемся?
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur quia veniam temporibus nisi ipsum id itaque. Earum nesciunt impedit, ab ut error possimus iusto fugit quaerat ipsum illum corrupti deserunt quia cumque repudiandae quam nulla, hic fuga mollitia. Aliquid ipsam dolore ex eum provident praesentium adipisci molestias corrupti. Soluta similique cupiditate praesentium quasi odit, nostrum fugiat ad animi sit?
          </div>

        </div>



        <div className={styles.fast_starting}>
          
          2

        </div>



        <div className={styles.skills}>
          3
        </div>



        <div className={styles.partners}>
          4
        </div>



        <div className={styles.program}>
          5
        </div>



        <div className={styles.mentors}>
          6
        </div>

      </main>
    </>
  )
}

export default Main