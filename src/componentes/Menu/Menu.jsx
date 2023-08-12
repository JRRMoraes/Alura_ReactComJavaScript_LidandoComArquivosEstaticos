import styles from "./Menu.module.scss";
import imgIcones from './icones.json';

import Icone from "componentes/Icone";


export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {imgIcones.map(iIcone =>
                    <Icone key={iIcone.id} icone={iIcone} style={styles} />
                )}
            </ul>
        </nav>
    );
}