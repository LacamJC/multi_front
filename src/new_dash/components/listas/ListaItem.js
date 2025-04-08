import styles from './Lista.module.css'

const ListaItem = ({ name, prop, alt }) => {
    return (
        <>
            <li className={`${styles.item_list} list-group-item`} alt={alt}>
                <span className={`${styles.desc}`}>
                    {name}
                </span>
                <span className={`${styles.prop}`}>
                    <span className={`${styles.label}`}>
                        {(prop)}
                    </span>
                </span>
            </li>
        </>)
}

export default ListaItem