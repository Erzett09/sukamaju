import React, { useState } from "react";
import styles from "../../../assets/css/registerpageowner.module.css";

export default function RegisterOwnerPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Kata sandi dan konfirmasi kata sandi tidak cocok!");
      setSuccess("")
      return;
    }
    
    if (formData.password.length < 6) {
        setError("Kata sandi minimal harus 6 karakter.");
        setSuccess("")
      return;
    }

    // Role otomatis diset sebagai 'owner'
    const payload = {
      ...formData,
      role: "owner",
    };

    console.log("Data Registrasi Owner Kasir Maju:", payload);
    setSuccess(
      `Berhasil mendaftarkan akun Owner untuk ${formData.username}!`
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cardContainer}>
        
        {/* SISI KIRI: Panel Branding Khusus Owner Kasir Maju */}
        <div className={styles.leftPanel}>
          <div className={styles.circleTop}></div>
          <div className={styles.circleBottom}></div>

          <div className={styles.brandContent}>
            <div className={styles.brandHeader}>
              <div className={styles.brandLogo}>K</div>
              <span className={styles.brandName}>Kasir Maju</span>
            </div>

            <h2 className={styles.heroTitle}>
              Kelola Bisnis & Pantau Penjualan Toko dari Mana Saja.
            </h2>
            <p className={styles.heroSubtitle}>
              Daftarkan akun <span className={styles.highlightText}>Owner</span> Anda 
              untuk mulai mengatur inventaris barang, memantau laporan laba rugi 
              secara *real-time*, dan mengelola akun staf kasir toko Anda.
            </p>
          </div>

          <div className={styles.ownerFeatureBox}>
            <p className={styles.featureBoxLabel}>Hak Akses Akun Owner:</p>
            <p className={styles.featureBoxTitle}>👑 Pemilik Toko (Full Akses)</p>
            <ul className={styles.featureList}>
              <li>✓ Laporan keuangan & analisis penjualan</li>
              <li>✓ Manajemen stok produk & kategori</li>
              <li>✓ Pembuatan & pengaturan akun staf kasir</li>
            </ul>
          </div>
        </div>

        {/* SISI KANAN: Form Registrasi Owner */}
        <div className={styles.rightPanel}>
          
          {/* Header & 1 Logo Register */}
          <div className={styles.formHeader}>
            <div className={styles.registerLogo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.registerIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <span className={styles.ownerBadge}>BUAT AKUN UNTUK MENAMBAHKAN TOKO</span>
            <h1 className={styles.formTitle}>Registrasi Akun Owner</h1>
            <p className={styles.formSubtitle}>
              Lengkapi data di bawah ini untuk membuat akun utama toko Anda
            </p>
          </div>

          {/* Notifikasi Error / Sukses */}
          {error && <div className={styles.alertError}> B{error}</div>}
          {success && <div className={styles.alertSuccess}>✅ {success}</div>}

          {/* Form Input dengan Layout Grid */}
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            
            {/* 1. Nama Pengguna */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Nama Pengguna</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Masukkan nama pengguna (contoh: owner_maju)"
                className={styles.input}
              />
            </div>

            {/* 2. Email */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="owner@email.com"
                className={styles.input}
              />
            </div>

            {/* 3. Nomor HP Aktif */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Nomor HP Aktif</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="0812xxxxxxxx"
                className={styles.input}
              />
            </div>

            {/* 4. Kata Sandi */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Kata Sandi</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Minimal 6 karakter"
                  className={`${styles.input} ${styles.passwordInput}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.togglePasswordBtn}
                >
                  {showPassword ? "Tutup" : "Lihat"}
                </button>
              </div>
            </div>

            {/* 5. Konfirmasi Kata Sandi */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Konfirmasi Kata Sandi</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Ulangi kata sandi"
                  className={`${styles.input} ${styles.passwordInput}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.togglePasswordBtn}
                >
                  {showConfirmPassword ? "Tutup" : "Lihat"}
                </button>
              </div>
            </div>

            <div className={`${styles.fullWidth} ${styles.wrapperKebijakan}`}>
                <label className={styles.wrapperKebijakan}>

                <input className={styles.checkboxForm} type="checkbox" alt="checkbox kebijakan dan privasi"/>
                <p>
                    Saya telah membaca dan menyetujui <a href="">Syarat ketentuan</a> & <a href="">Kebijakan Privasi</a>
                </p>
                </label>
            </div>
            {/* Tombol Submit */}
            <div className={styles.fullWidth}>
              <button type="submit" className={styles.submitBtn}>
                Daftar Akun Owner Sekarang
              </button>
            </div>

          </form>

          {/* Footer Link ke Halaman Login Owner */}
          <p className={styles.footerText}>
            Sudah memiliki akun Owner di{" "}
            <span className={styles.footerBrand}>Kasir Maju</span>?{" "}
            <a href="/login-owner" className={styles.loginLink}>
              Masuk (Login) di sini
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}