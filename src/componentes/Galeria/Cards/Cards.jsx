import Card from "./Card";


export const Cards = ({
    ddFotos,
    styles
}) => {
    return (
        <ul className={styles.galeria__cards}>
            {ddFotos.map(iFoto => {
                return (
                    <Card foto={iFoto}
                        styles={styles}
                    />
                )
            })}
        </ul>
    )
}