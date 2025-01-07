"use client";
import { useRouter } from 'next/navigation';
import styles from './walletinfo.module.scss';
import { useSelector } from "react-redux";

export const WalletInfo = () => {
  const walletAddress = useSelector((state) => state.wallet.address);
  const router = useRouter()
  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.button}>Back</button>
      <p className={styles.title}>Connected Wallet Address:</p>
      <p className={styles.info}>{walletAddress}</p>
    </div>
  );
};
