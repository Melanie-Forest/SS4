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

          <table className={styles.fs_table}>

            <tr className={styles.fs_table1}>
              <td className={styles.fs_tab_item}>
                100%
              </td>
              <td className={styles.fs_tab_item}>
                75%
              </td>
              <td className={styles.fs_tab_item}>
                50%
              </td>
              <td className={styles.fs_tab_item}>
                Итог
              </td>
            </tr>

            <tr className={styles.fs_table2}>
              <td className={styles.fs_tab_item}>
                <img src={rec_1} alt="" />
              </td>
              <td className={styles.fs_tab_item}>
                <img src={rec_2} alt="" />
              </td>
              <td className={styles.fs_tab_item}>
                <img src={rec_3} alt="" />
              </td>
              <td className={styles.fs_tab_item}>
                <img src={rec_4} alt="" />
              </td>
            </tr>

            <tr className={styles.fs_table3}>
              <td className={styles.fs_tab_item}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime eum blanditiis recusandae quia dignissimos ex exercitationem repellendus repudiandae nam tenetur non culpa, nihil expedita? Magni, similique. Provident, ipsum laudantium.
              </td>
              <td className={styles.fs_tab_item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis qui, molestias, ab dolorum temporibus vel adipisci maxime velit obcaecati nostrum tempore sequi officiis numquam aut. Aliquam magnam magni quidem architecto minus ipsam iure autem doloribus? Possimus, qui autem sit alias, saepe hic quidem ipsum laboriosam odit modi quas provident ipsa?
              </td>
              <td className={styles.fs_tab_item}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus expedita, corrupti quia adipisci amet assumenda impedit nulla iste voluptatem. Harum ducimus unde sed incidunt maiores accusamus rerum id, assumenda debitis. Deleniti fugit fugiat perspiciatis aliquam error, officia provident dolore neque suscipit minus magni iusto enim ab at pariatur voluptatibus deserunt quis iste maiores! Molestias deserunt, animi blanditiis labore facilis in beatae modi quidem! Commodi voluptatum omnis, repellat quibusdam delectus molestias facere expedita. Molestiae nulla sit non veritatis magnam provident, voluptate inventore enim, voluptatibus dolorum reiciendis officia animi. Maiores aut eos provident commodi in at dolor dolore nisi ipsum omnis?
              </td>
              <td className={styles.fs_tab_item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A velit impedit beatae est quibusdam ab odio repellat aperiam similique laudantium!
              </td>
            </tr>

          </table>

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