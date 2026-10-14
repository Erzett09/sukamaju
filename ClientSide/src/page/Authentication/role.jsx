
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../assets/css/rolepage.module.css";

const roles = [
    {
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
                    </span>
                        </div>
                        <span onClick={() => setModal(!Modal)}>X</span>
                    </div>

                    <div className={style.ModalText}>
                        Apakah anda sudah memiliki akun <strong>{selectedRole == "owner" ? " Owner" : " Cashier"}</strong>?
                    </div>

                    <div className={style.ModalButton}>
                        <span>Sudah</span>
                        <span>Belum</span>
                    </div>
                </div>
            </div>
            )}

            <div className={style.wrapper}>
                <header className={style.header}>
                    <div className={style.brandIcon}>K</div>

                    <span className={style.brandName}>
                        Kasir <strong>Maju</strong>
                    </span>
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
                                            {role.icon}
                                        </div>

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

                                    <div className={style.cardHeading}>
                                        <h2>{role.title}</h2>
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
