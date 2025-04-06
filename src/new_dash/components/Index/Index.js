import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import Header from '..//Header/Header';
import styles from './index.module.css'

const Index = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <Header />
                <Body />
                {/* <Footer /> */}
            </div>

        </>
    )
}

export default Index