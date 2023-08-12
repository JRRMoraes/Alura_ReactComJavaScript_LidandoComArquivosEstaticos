import styles from "./Cabecalho.module.scss";
import imgLogo from "./logo.png";
import imgSearch from "./search.png";


export const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={imgLogo}
                alt="Logo do Alura Space"
            />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input}
                    type="text"
                    placeholder="O que você procura?"
                />
                <img src={imgSearch}
                    alt="Ícone de lupa"
                />
            </div>
        </header>
    )
}