import styles from './Lista.module.css'
const Lista = () => {
    return (
        <>
            <ul className="list-group">
                <li className={`${styles.item_list} list-group-item`}>
                    <span className={`${styles.desc}`}>
                        Lorem isplum dolor
                    </span>
                    <span className={`${styles.prop}`}>
                        <span className={`${styles.label}`}>
                            R$:100000
                        </span>
                    </span>
                </li>
            </ul>
        </>
    )
}

export default Lista 