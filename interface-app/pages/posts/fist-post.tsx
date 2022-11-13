import type { NextPage } from 'next'
import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Script from 'next/script';
import TokenApp from "../../components/TokenApp/index";

const FirstPost: NextPage = () => {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>fist Post</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
        <TokenApp></TokenApp>
        
      </div>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js" //加载第三方脚本
                strategy="lazyOnload"                           //空闲时加载
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)    //用于在脚本完成加载后立即运行任何 JavaScript 代码
                }
            />
            <h1>First Post</h1>
            <div className={styles.grid}>
                <Link href="/" className={styles.card}>
                    <h2>Back to home &rarr;</h2>
                </Link>
            </div>
        </div>
    )
}

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="profileImage"
  />
);

export default FirstPost;
