import styles from "./Populares.module.scss";
import ddFotosPopulares from "./fotos-populares.json";

import Botao from "componentes/Botao";


export const Populares = () => {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {ddFotosPopulares.map(iFotoPopular => {
                    return (
                        <li key={iFotoPopular.id}>
                            <img src={iFotoPopular.path}
                                alt={iFotoPopular.alt}
                            />
                        </li>
                    )
                })}
            </ul>
            <Botao>Ver mais fotos</Botao>
        </aside>
    )
}