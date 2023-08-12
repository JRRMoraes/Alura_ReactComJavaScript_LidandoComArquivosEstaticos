import imgFavorito from "./favorito.png";
import imgOpen from "./open.png";


export const Card = ({
    foto,
    styles
}) => {
    return (
        <li key={foto.id}
            className={styles.galeria__card}
        >
            <img className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>
                {foto.titulo}
            </p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={imgFavorito}
                        alt="Ícone coração de curtir"
                    />
                    <img src={imgOpen}
                        alt="Ícone de abrir modal"
                    />
                </span>
            </div>
        </li>
    )
}