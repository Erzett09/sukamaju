
import style from '../assets/css/main.module.css'
import CashierLogo from '../assets/images/svg/cashier-logo.svg'
import ArrowButton from '../assets/images/svg/arrow-up-right.svg'
import cheerful3D from '../assets/images/properties/cheerful-3d.jpg'

export const Main = () => {

    const features = {
        usefully : {
            image : cheerful3D,
            text : "Mudah digunakan untuk bisnis kecil hingga besar"
        }
    }

    return (
        <>
            <section className={style.MainSection}>
                    <div className={style.container}>
                        <div className={style.StartMenu}>
                            <div className={style.title}>
                            <h1>Kasir</h1>
                            <h1>Maju</h1>
                            <img src={CashierLogo} className={style.logo} alt='Logo cashier'/>
                            </div>
                            <h3>Aplikasi Kasir Nusantara, dibuat untuk memudahkan penanganan
                                kasir untuk market, cafe, dan bisnis lain nya.
                            </h3>

                            <div className={style.GoButton}>
                                Mulai sekarang! <img src={ArrowButton} className={style.smLogo}/>
                            </div>

                        </div>
                    </div>
            </section>

            <section className={style.SectionFeature}>
                <div className={style.containerGrid}>
                    <div className={style.ContainerCard}>
                        <div className={style.cardLogo}>
                            <img src={cheerful3D} alt='cheerful3D logo'/>
                        </div>

                        <div className={style.cardText}>
                            <h4>Mudah untuk digunakan untuk bisnis kecil hingga besar</h4>
                        </div>

                        <div className={style.cardButton}>
                            <span>Pelajari selengkapnya</span>
                        </div>
                    </div>
                    <div className={style.ContainerCard}>
                        <div className={style.cardLogo}>
                            <img src={cheerful3D} alt='cheerful3D logo'/>
                        </div>

                        <div className={style.cardText}>
                            <h4>Mudah untuk digunakan untuk bisnis kecil hingga besar</h4>
                        </div>

                        <div className={style.cardButton}>
                            <span>Pelajari selengkapnya</span>
                        </div>
                    </div>
                    <div className={style.ContainerCard}>
                        <div className={style.cardLogo}>
                            <img src={cheerful3D} alt='cheerful3D logo'/>
                        </div>

                        <div className={style.cardText}>
                            <h4>Mudah untuk digunakan untuk bisnis kecil hingga besar</h4>
                        </div>

                        <div className={style.cardButton}>
                            <span>Pelajari selengkapnya</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;