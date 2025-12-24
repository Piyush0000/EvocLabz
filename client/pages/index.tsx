import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="EvocLabz - Home">
      <div className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>EvocLabz SaaS Platform</h2>
            <p>Welcome to EvocLabz - Your innovative SaaS platform!</p>
            <p>Backend connected to PostgreSQL (Prisma) and MongoDB (Mongoose)</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}