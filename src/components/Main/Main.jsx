"use client";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectWallet,
  disconnectWallet as disconnectWalletAction,
} from "../../redux/slices/walletSlice";
import styles from "./main.module.scss";
import Link from "next/link";

export const Main = () => {
  const dispatch = useDispatch();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const walletAddress = useSelector((state) => state.wallet.address);

  const disconnectWallet = async () => {
    try {
      await tonConnectUI.disconnect();
      dispatch(disconnectWalletAction());
      console.log("Кошелек отключен");
    } catch (error) {
      console.error("Ошибка при отключении кошелька:", error);
    }
  };

  if (wallet) {
    const address = wallet.account.address;
    dispatch(connectWallet(address));
  }

  return (
    <div>
      {!wallet ? (
        <div>
          <TonConnectButton className={styles.openButton} />
        </div>
      ) : (
        <div className={styles.container}>
          <button onClick={disconnectWallet} className={styles.closeButton}>
            DISCONNECT
          </button>

          <div className={styles.wrapper}>
            <Link href="/TestPage" walletAddress={walletAddress} className={styles.decoration}>
              <button className={styles.link}>TEST 1</button>
            </Link>
            <Link href="/TestPage2" walletAddress={walletAddress} className={styles.decoration}>
              <button className={styles.link}>TEST 2</button>
            </Link>
            <Link href="/TestPage3" walletAddress={walletAddress} className={styles.decoration}>
              <button className={styles.link}>TEST 3</button>
            </Link>
            <Link href="/TestPage4" walletAddress={walletAddress} className={styles.decoration}>
              <button className={styles.link}>TEST 3</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
