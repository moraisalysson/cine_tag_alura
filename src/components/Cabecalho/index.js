import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLinks";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home           {/* <--- {children} */}
                </CabecalhoLink>
                <CabecalhoLink url="./favoritos">
                    Favoritos      {/* <--- {children} */}
                </CabecalhoLink>
            </nav>
        </header>
    );
}

export default Cabecalho;