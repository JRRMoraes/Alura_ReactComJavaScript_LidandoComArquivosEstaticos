import styles from "./Tags.module.scss";


export const Tags = ({
    tags,
    aoFiltrarFotosPorTag,
    aoRemoverFiltro
}) => {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map(iTag => {
                    return (
                        <li key={iTag}
                            onClick={() => aoFiltrarFotosPorTag(iTag)}
                        >
                            {iTag}
                        </li>
                    )
                })}
                <li key={-1}
                    onClick={() => aoRemoverFiltro()}
                >
                    Todas
                </li>
            </ul>
        </div>
    )
}