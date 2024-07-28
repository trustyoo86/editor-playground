'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Theme } from "@radix-ui/themes";
import GlobalHeader from "@/components/GlobalHeader";
import '@radix-ui/themes/styles.css';

export default function Home() {
  return (
    <Theme scaling="90%" accentColor="gray" grayColor="slate">
      <main className={styles.main}>
        <GlobalHeader />

        <div className={styles.content}>

        </div>
      </main>
    </Theme>
  );
}
