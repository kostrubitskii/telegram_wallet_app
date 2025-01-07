"use client";
import styles from './walletinfo.module.scss';
import { useSelector } from "react-redux";

export const WalletInfo = () => {
  const walletAddress = useSelector((state) => state.wallet.address);
  return (
    <div className={styles.container}>
      <p className={styles.title}>Connected Wallet Address:</p>
      <p className={styles.info}>{walletAddress}</p>
    </div>
  );
};
