import { useState } from "react";
import styles from "./Galeria.module.scss";
import ddFotos from "./fotos.json";

import Tags from "componentes/Tags";
import Cards from "./Cards";


export const Galeria = () => {

    const [fotosItens, setFotosItens] = useState(ddFotos);

    const tags = [...new Set(ddFotos.map(iFoto => iFoto.tag))]


    const FiltrarFotosPorTag = (tag) => {
        const novasFotos = ddFotos.filter(iFoto => iFoto.tag === tag);
        setFotosItens(novasFotos);
    }


    const RemoverFiltro = () => {
        setFotosItens(ddFotos);
    }


    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags}
                aoFiltrarFotosPorTag={FiltrarFotosPorTag}
                aoRemoverFiltro={RemoverFiltro}
            />
            <Cards ddFotos={fotosItens}
                styles={styles}
            />
        </section>
    )
}