import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css"
import Background from "./img/bgc.svg"

function App() {
  return (
    <div className={styles.Background}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
