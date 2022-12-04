import Tabs from '@common/Tabs'
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from "next/image";

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.leftSection}>
          <Image src={'/images/svg/logo.svg'} alt="logo" width={357} height={291} />
          <h1 className='font-bold text-[28px] text-[#35363A]'>Title comes here</h1>
        <div className='w-[448px] h-[110px] text-center'>
          <p className='text-lg font-normal text-[#35363A]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        </section>
       
        <section className={styles.rightSection}>
          <Tabs />
        </section>
      </main>
    </div>
  )
}

export default IndexPage
