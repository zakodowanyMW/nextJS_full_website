import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Created by Marcin </div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="facebook" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="youtube" />
      </div>
    </div>
  )
}

export default Footer