
import style from '../assets/css/main.module.css'
import CashierLogo from '../assets/images/svg/cashier-logo.svg'
import ArrowButton from '../assets/images/svg/arrow-up-right.svg'
import cheerful3D from '../assets/images/properties/cheerful-3d.jpg'
import SecuredLogo from '../assets/images/properties/blue_shield_lock.png'
import PhoneMedia from '../assets/images/properties/phone_media.jpg'
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from "react-router-dom"
export const Main = () => {

    const Navigate = useNavigate();
    const FeatureRefs = useRef([])
    const [visibleFeatures,setVisibileFeatures] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const index = Number(entry.target.dataset.index)

                    setVisibileFeatures((prev) => {
                        if(prev.includes(index)) return prev

                        return [...prev,index]
                    });

                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold : 0.2
        })
        FeatureRefs.current.forEach((element) => {
            if (element) observer.observe(element)
        })

        return () => {
            observer.disconnect()
        }
    },[])


    const features = [
        {
            image : cheerful3D,
            text : "Mudah digunakan untuk bisnis kecil hingga besar"
        },

        {
            image : SecuredLogo,
            text : "Keamanan enkripsi, untuk perlindungan yang lebih baik bagi pengguna" 
        },

        {
            image : PhoneMedia,
            text : "Mudah di akses dari segala media perangkat pengguna"
        }
    ]

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

                            <div className={style.GoButton} onClick={() => {Navigate('/role')}}>
                                Mulai sekarang! <img src={ArrowButton} className={style.smLogo}/>
                            </div>

                        </div>
                    </div>
            </section>

            <section className={style.SectionFeature}>
                <div className={`${style.centered} ${style.fullWidth} ${style.containerTextFeature}`}>
                    <h1>KEUNGGULAN</h1>
                    <p>
                        Semua yang kamu butuhkan untuk mengelola bisnis dengan lebih mudah.
                    </p>
                </div>
                <div className={style.containerGrid}>

                    {
                        features.map((feature,index) => {
                            return (
                                <div key={index} ref={(element) => {
                                    FeatureRefs.current[index] = element
                                    
                                }}
                                data-index={index}
                                className={`${style.ContainerCard} ${visibleFeatures.includes(index) ? style.showCard : style.hiddenCard}`}>
                                    <div className={style.cardLogo}>
                                        <img src={feature.image} alt='cheerful3D logo'/>
                                    </div>

                                    <div className={style.cardText}>
                                        <h4>{feature.text}</h4>
                                    </div>

                                    <div className={style.cardButton}>
                                        <span>Pelajari selengkapnya</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Main;