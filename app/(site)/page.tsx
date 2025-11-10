import HeroSection from "@/components/sections/HeroSection";
import styles from "./page.module.scss";
import HandwerkOnlineSection from "@/components/sections/HandwerkOnlineSection";
import LeistungenSection from "@/components/sections/LeistungenSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <HandwerkOnlineSection />
      <LeistungenSection />
    </div>
  );
}
