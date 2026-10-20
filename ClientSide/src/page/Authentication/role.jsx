
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../assets/css/rolepage.module.css";
import LoginIcon from '../../assets/images/svg/login-bracket.svg'
import AddUserIcon from '../../assets/images/svg/add-user.svg'
import OwnerLogo from '../../assets/images/properties/owner-kasirmaju.png'
import cashierLogo from '../../assets/images/properties/cashier-sukamaju.png'

const roles = [
    {
        logo : OwnerLogo,
        id: "owner",
        title: "Owner",
        subtitle: "Kelola bisnis Anda",
        description:
            "Kelola toko, produk, laporan penjualan, dan pengguna kasir dalam satu tempat.",
        icon: "🏪",
        features: [
            "Kelola produk dan kategori",
            "Pantau laporan penjualan",
            "Atur pengguna kasir",
        ],
    },
    {
        logo : cashierLogo,
        id: "cashier",
        title: "Cashier",
        subtitle: "Mulai melayani pelanggan",
        description:
            "Proses transaksi penjualan, kelola pembayaran, dan cetak nota dengan mudah.",
        icon: "🧾",
        features: [
            "Proses transaksi penjualan",
            "Kelola pembayaran",
            "Cetak nota transaksi",
        ],
    },
];

const RolePage = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const [Modal,setModal] = useState(false)
    const OptionButtons = useRef([])
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!selectedRole) return;

        // Sesuaikan route dengan halaman di proyekmu.
        if (selectedRole === "owner") {
            setModal(true)
        } else {
            setModal(true)
        }
    };

    function OptionButtonGo(option){
        if (selectedRole == "owner" && option == 'haveAcc') {
            navigate('/auth/reg/owner')
        } 

        if (selectedRole == 'owner' && option == 'noAcc') {
            alert("no acc owner")
        }

        if (selectedRole == 'cashier' && option == 'haveAcc') {
            alert("acc cashier") 
        }

        if (selectedRole == 'cashier' && option == 'noAcc') {
            alert("no acc Cashier")
        }
    }

    return (
        <main className={style.page}>

            {Modal && (

                <div className={style.ContainerModal}>
                <div className={`${style.Modal}  ${Modal ? style.show : ""} `}>
                    <div className={style.ModalNavbar}>
                        <div>
                            <div className={style.brandIcon}>K</div>
                            <span className={style.brandName}>
                                Kasir <strong>Maju</strong>
                                <p>
                                    Pengaturan Akun {selectedRole == "owner" ? "owner" : 'cashier'}
                                </p>
                            </span>
                        </div>
                        <span className={style.Xbutton} onClick={() => setModal(!Modal)}>X</span>
                    </div>

                    <div className={style.ModalText}>
                        Apakah anda sudah memiliki akun <strong>{selectedRole == "owner" ? " Owner" : " Cashier"}</strong>?
                        <p>
                            Pilih opsi yang sesuai untuk melanjutkan ke tahap berikutnya.
                        </p>
                    </div>

                    <div className={style.ModalButton}>
                        <div className={style.WrapperOptionButton} onClick={() => OptionButtonGo('haveAcc')} id="haveAcc" ref={OptionButtons}>
                            <div className={style.imgOptionButton}>
                                <img src={LoginIcon} alt="Login icon"></img>
                            <div className={style.TextOptionButton}>
                                Sudah punya akun
                                <p>
                                    Masuk dengan akun {selectedRole == "owner" ? "owner" : "cashier"} yang ada
                                </p>
                            </div>

                        </div>
                            <span className={style.arrowOptionButton}>
                                →
                            </span>
                            </div>
                        <div className={style.WrapperOptionButton} onClick={() => OptionButtonGo('noAcc')}   ref={OptionButtons}>
                            <div className={style.imgOptionButton}>
                                <img src={AddUserIcon} alt="add user icon"></img>

                            <div className={style.TextOptionButton}>
                                    Belum punya akun
                                    <p>
                                        Lanjutkan untuk membuat akun {selectedRole == 'owener' ? "owenr" : 'cashier'} baru.
                                    </p>
                            </div>
                            </div>

                            <span className={style.arrowOptionButton}>
                                →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )}

            <div className={style.wrapper}>
                <header className={style.header} onClick={() => navigate('/')}>
                    <div style={{ display:'flex',justifyContent:'center', alignItems:'center',gap:'0.50rem',cursor:"pointer" }}>

                    <div className={style.brandIcon}>K</div>

                    <span className={style.brandName}>
                        Kasir <strong>Maju</strong>
                    </span>
                    </div>
                </header>

                <section className={style.content}>
                    <span className={style.eyebrow}>
                        SELAMAT DATANG
                    </span>

                    <h1>
                        Pilih Peran <span>Anda</span>
                    </h1>

                    <p className={style.description}>
                        Pilih peran yang sesuai untuk melanjutkan
                        menggunakan Kasir Maju.
                    </p>

                    <div className={style.roleGrid}>
                        {roles.map((role) => {
                            const isSelected =
                                selectedRole === role.id;

                            return (
                                <button
                                    type="button"
                                    key={role.id}
                                    className={`${style.roleCard} ${
                                        isSelected
                                            ? style.selected
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedRole(role.id)
                                    }
                                    aria-pressed={isSelected}
                                >
                                    <div className={style.cardTop}>
                                        <div className={style.roleIcon}>
                                            <img src={role.logo} alt="logo"/>
                                        </div>
                                    </div>

                                    <div className={style.cardHeading}>
                                        <div style={{ display:"flex",justifyContent:"start",alignItems:'center', gap:"0.50rem" }}>
                                        <h2>{role.title}</h2>
                                        <div
                                            className={`${style.radio} ${
                                                isSelected
                                                    ? style.radioActive
                                                    : ""
                                            }`}
                                        >
                                            {isSelected && (
                                                <span>✓</span>
                                            )}
                                        </div>
                                        </div>
                                        <span>{role.subtitle}</span>
                                    </div>

                                    <p className={style.cardDescription}>
                                        {role.description}
                                    </p>

                                    <ul className={style.featureList}>
                                        {role.features.map((feature) => (
                                            <li key={feature}>
                                                <span
                                                    className={
                                                        style.checkIcon
                                                    }
                                                >
                                                    ✓
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={style.cardFooter}>
                                        <span>
                                            Pilih {role.title}
                                        </span>
                                        <span className={style.arrow}>
                                            ↗
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        className={style.continueButton}
                        disabled={!selectedRole}
                        onClick={handleContinue}
                    >
                        Lanjutkan
                        <span>→</span>
                    </button>

                    <p className={style.footerText}>
                        Pilih peran sesuai akses akun Anda.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default RolePage;
