"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const pathname = usePathname();

    useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        {/* NAV LOGO */}
        <Link href="/" className={styles.navbar__logo}>
          <div className={`${styles.navbar__logoContainer} ${
            isShrunk ? styles["navbar__logoContainer--shrink"] : ""
          }`}>
            <span className={styles.navbar__logoText}>JOKIC</span>
            <div className={styles.navbar__logoImage}>
              <Image
                src="/images/logo.webp"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 40px, (max-width: 1024px) 50px, 60px"
                alt="logo"
                loading="eager"
              />
            </div>
            <span className={styles.navbar__logoText}>MONT.</span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className={styles.navbar__links}>
          <Link
            href="/leistungen"
            className={`${styles.navbar__link} ${
              pathname === "/leistungen" ? styles["navbar__link--active"] : ""
            }`}
          >
            Leistungen
          </Link>

          <Link href="/#kontakt" className={styles.navbar__link}>
            Kontakt
          </Link>

          <Link
            href="/aktuell"
            className={`${styles.navbar__link} ${
              pathname === "/aktuell" ? styles["navbar__link--active"] : ""
            }`}
          >
            Aktuell
          </Link>

          <Link
            href="/karriere"
            className={`${styles.navbar__link} ${
              pathname === "/karriere" ? styles["navbar__link--active"] : ""
            }`}
          >
            Karriere
          </Link>

          <Link
            href="/galerie"
            className={`${styles.navbar__link} ${
              pathname === "/galerie" ? styles["navbar__link--active"] : ""
            }`}
          >
            Galerie
          </Link>

          <Link
            href="/impressum"
            className={`${styles.navbar__link} ${
              pathname === "/impressum" ? styles["navbar__link--active"] : ""
            }`}
          >
            Impressum
          </Link>
        </div>
                <div className={styles.navbar__contactSvgs}>{/*PLACEHOLDER*/}</div>
        {/* HAMBURGER ICON */}
        <button
          className={styles.navbar__hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {!menuOpen && <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div className={styles.navbar__overlay}></div>

          <div
            className={styles.navbar__mobileMenu}
            onClick={() => setMenuOpen(false)}
          >
            <button
              className={styles.navbar__closeBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <X size={28} />
            </button>

            <Link href="/" className={styles.navbar__mobileLink}>
              Startseite
            </Link>

            <Link href="/leistungen" className={styles.navbar__mobileLink}>
              Leistungen
            </Link>

            <Link href="/#kontakt" className={styles.navbar__mobileLink}>
              Kontakt
            </Link>

            <Link href="/aktuell" className={styles.navbar__mobileLink}>
              Aktuell
            </Link>

            <Link href="/karriere" className={styles.navbar__mobileLink}>
              Karriere
            </Link>

            <Link href="/galerie" className={styles.navbar__mobileLink}>
              Galerie
            </Link>

            <Link href="/impressum" className={styles.navbar__mobileLink}>
              Impressum
            </Link>

            <Link
              href="/datenschutzerklaerung"
              className={styles.navbar__mobileLink}
            >
              Datenschutzerklärung
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
