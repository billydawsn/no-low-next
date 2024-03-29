import styles from "./page.module.css";

import Button from "../components/button";
import Logo from "../components/logo";
import Waves from "../components/waves";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <p className={styles.content}>
        Welcome to the no-low club, your source for all things no and low
        alcohol. 
      </p>
      <div className={styles.button_wrapper}>
        <Button url="https://thenolowclub.substack.com/" iconName="substack">
          Substack
        </Button>
        <Button
          url="https://www.instagram.com/thenolowclub/"
          iconName="instagram"
        >
          Instagram
        </Button>
      </div>
      <Waves className={styles.waves} />
    </main>
  );
}
