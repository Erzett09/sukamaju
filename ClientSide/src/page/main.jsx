
import style from '../assets/css/main.module.css'
import CashierLogo from '../assets/images/svg/cashier-logo.svg'
import ArrowButton from '../assets/images/svg/arrow-up-right.svg'

export const Main = () => {
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
                    
                </div>
            </section>
        </>
    )
}

export default Main;