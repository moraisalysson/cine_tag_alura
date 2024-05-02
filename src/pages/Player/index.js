import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams(); //usa o parâmetro (ex.: 1) passado na URL -> http://localhost:3000/1 

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/moraisalysson/cinetag-api/videos?id=${parametros.id}`)
        .then(result => result.json())
        .then(dados => 
            setVideo(...dados))
    }, [])

    if(!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    src={video.link}
                    title={video.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                >
                </iframe>
            </section>
        </>
    )
}

export default Player;