import styles from "./Banner.module.scss";
import imgBanner from "./banner.png";


export const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={imgBanner}
                alt="A imagem da Terra vista do espaço"
            />
        </div>
    );
}