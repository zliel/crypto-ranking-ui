import Head from 'next/head'
import CoinList from '../components/CoinList'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Rankings</title>
        <meta name="crypto rankings" content="Webapp to see the top 50 cryptocurrencies of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />

    <main>
      <CoinList/>
    </main>
      
    </div>
  )
}
