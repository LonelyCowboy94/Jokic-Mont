import Image from "next/image";
import styles from "./LeistungenSection.module.scss";

const LeistungenSection = () => {
  return (
    <section className={styles.leistungenSection}>
      <div className={`${styles.leistungenSection__articleWrapper} flex-wrap`}>
        <div className={styles.leistungenSection__imageWrapper}>
          <Image
            className={styles.leistungenSection__img}
            fill
            src="https://res.cloudinary.com/dbhtd4ffm/image/upload/v1762760743/image-960x960_bs1a1b.jpg"
            alt="Leistungsbereich-img"
          />
        </div>
        <article
          className={`${styles.leistungenSection__article} gradient-text`}
        >
          <h3 className={styles.leistungenSection__title}>Leistungsbereich</h3>
          <p className={styles.leistungenSection__text}>
            Wir bieten sowohl Privatkunden als auch Gewerbetreibenden
            maßgeschneiderte Lösungen.
          </p>
          <ul className={styles.leistungenSection__list}>
            <li>Innenausbau</li>
            <li>Abbrucharbeiten</li>
            <li>Garten- und Aussenanlagen</li>
            <li>Montagearbeiten</li>
            <li>Hausmeisterservice</li>
            <li>Logistik</li>
            <li>Entsorgung</li>
            <li>Beratung und Planung</li>
            <li>Montagearbeiten / SHK</li>
            <li>Montagearbeiten / Elektroinst.</li>
            <li>Montagearbeiten / Rohbau</li>
            <li>Netzwerk / Haustechnik</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default LeistungenSection;
