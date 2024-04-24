import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card 
                    key="1"
                    titulo="Fake"
                    capa="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dxgXqbpKnjT7iQwIJ8nUIeYwj4FYR1gGIC9Qo75Jow&s"
                />
            </section>
        </>
    )
}

export default Favoritos;