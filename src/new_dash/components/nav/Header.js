import logo from "../../../assets/img/BITMAP.png"

import styles from "./Header.module.css"

const Header = () => {
    return(
        <>
        <nav>
            <div className={`${styles.upe}  `}>
                <div className={`${styles.logo}`}>
                    <img src={logo}></img>
                </div>
                <div className={`${styles.title}`}>
                    Multi Soluction - Análise de apontamentos
                </div>
            </div>

        </nav>
        </>
    )
}

export default Header