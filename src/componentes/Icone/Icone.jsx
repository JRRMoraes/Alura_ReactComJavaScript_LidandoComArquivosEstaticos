export const Icone = ({
    icone,
    style
}) => {
    return (
        <li className={style.menu__item}>
            <a href="/">
                <img src={icone.path}
                    alt={icone.alt}
                />
                {icone.link}
            </a>
        </li>
    )
}