import Footer from './components/assets/Footer/Footer';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import styles from './components/assets/scss/index.module.css'

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