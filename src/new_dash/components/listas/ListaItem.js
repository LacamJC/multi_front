import styles from './Lista.module.css'
import { FaRegClock } from "react-icons/fa"
const ListaItem = ({ name, prop, alt, hour }) => {
    
    return (
        <>
            <li className={`${styles.item_list} list-group-item`} alt={alt}>
                <span className={`${styles.desc}`}>
                    {name}
                </span>
                <span className={`${styles.prop}`}>
                    
                    <span className={`${styles.label_hour}`}>
                        <FaRegClock />
                        <span className={`${styles.sp}`}></span>
                        {hour}
                    </span>
                    <span className={`${styles.label}`}>
                        {(prop)}
                    </span>

                </span>
            </li>
        </>)
}

export default ListaItem