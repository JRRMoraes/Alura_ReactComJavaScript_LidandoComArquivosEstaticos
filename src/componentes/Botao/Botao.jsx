import style from './Botao.module.scss'


export const Botao = ({
    children
}) => {
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}