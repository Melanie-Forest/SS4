import React from 'react'
import styles from "./Main.module.css"
import ABOUT from "../../img/about__img.svg"
import IH from "../../img/icon-heading.svg"
import rec_1 from "../../img/rec-100.svg"
import rec_2 from "../../img/rec-75.svg"
import rec_3 from "../../img/rec-50.svg"
import rec_4 from "../../img/rec-last.svg"


const Main = () => {
  return (
    <>
      <main className={styles.Main}>

        <div className={styles.what_it_is}>

          <div className={styles.wts_card}>
            <img src={ABOUT} alt="picture" />
          </div>

          <div className={styles.wts_card}>
            <div className={styles.text_head}>
              Чем мы занимаемся?
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur quia veniam temporibus nisi ipsum id itaque. Earum nesciunt impedit, ab ut error possimus iusto fugit quaerat ipsum illum corrupti deserunt quia cumque repudiandae quam nulla, hic fuga mollitia. Aliquid ipsam dolore ex eum provident praesentium adipisci molestias corrupti. Soluta similique cupiditate praesentium quasi odit, nostrum fugiat ad animi sit?
          </div>

        </div>



        <div className={styles.fast_starting}>
          <div className={styles.fs_head}>
            <img src={IH} alt="" className={styles.icon_heading} />
            <div className={styles.fs_text_head}>
              Быстрый старт
            </div>
          </div>
          
          <div className={styles.fs_text}>
            Больше 90% учеников прошли полный курс и смогли
            <br />собрать свой первый компьютер
          </div>

          <div className={styles.fs_table}>
            <div className={styles.fs_table1}>
              <div className={styles.fs_tab_item}>
                100%
              </div>
              <div className={styles.fs_tab_item}>
                75%
              </div>
              <div className={styles.fs_tab_item}>
                50%
              </div>
              <div className={styles.fs_tab_item}>
                Итог
              </div>
            </div>

            <div className={styles.fs_table2}>
              <div className={styles.fs_tab_item1}>
                <img src={rec_1} alt="" />
              </div>
              <div className={styles.fs_tab_item2}>
                <img src={rec_2} alt="" />
              </div>
              <div className={styles.fs_tab_item3}>
                <img src={rec_3} alt="" />
              </div>
              <div className={styles.fs_tab_item4}>
                <img src={rec_4} alt="" />
              </div>
            </div>

            <div className={styles.fs_table3}>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus qui molestiae deserunt provident fugit vel veritatis voluptate delectus. Vero, deserunt.
              </div>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus corporis aperiam. Recusandae rem minima distinctio ab quidem atque facilis?
              </div>
              <di className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, corporis quas amet non aperiam temporibus pariatur necessitatibus fuga itaque quos!
              </di>
              <div className={styles.fs_tab_item5}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A velit impedit beatae est quibusdam ab odio repellat aperiam similique laudantium!
              </div>
            </div>
          </div>
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