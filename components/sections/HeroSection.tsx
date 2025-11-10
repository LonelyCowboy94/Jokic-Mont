import Image from "next/image";
import styles from "./HeroSection.module.scss";
import HeroSlider from "../HeroSlider";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <HeroSlider />
      <div className={styles.heroSection__banner}>
        <h1 className={styles.heroSection__title}>
          <span className={styles.heroSection__name}>JOKIĆ</span>
          <Image
            src="/images/logo.webp"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 375px) 120px, 350px"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            priority
            className={styles.heroSection__logo}
          />
          <span className={styles.heroSection__name}>MONT.</span>
          <span className={styles.heroSection__spacer}></span>
        </h1>
        <div>
          <h2 className={styles.heroSection__subtitle}>
            HANDWERK <span>+</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
