import React from 'react'
import styles from "./MainScreen.module.css"

const Main = () => {
  return (
    <>
      <main className={styles.MainScreen}>

        <div className={styles.Main_page}>
          <div className={styles.Main_page_box}>

            <h1 className={styles.Main_page_h}>
              Первый курс по компьютерной сборке
            </h1>

            <div className={styles.Main_page_timer}>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  дней
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  часов
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  минут
                </text>
              </div>
              <div className={styles.Main_page_timer_item}>
                <text className={styles.Main_page_timer_count}>
                  18
                </text>
                <text className={styles.Main_page_timer_name}>
                  секунд
                </text>
              </div>

            </div>

          </div>
        </div>

        <div className={styles.Main_line}>
          
          <div className={styles.Main_line_button}>
            <a href='/' className={styles.Main_line_button}>
              <img src="/" alt="" className={styles.line__button} />
            </a>
          </div>

          <div className={styles.Main_line_bar}>
            
          </div>

        </div>

      </main>
    </>
  )
}

export default Main